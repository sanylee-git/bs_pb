/**
 * GEO (Generative Engine Optimization) — AI 유입 추적 스크립트
 *
 * 목적: ChatGPT·Perplexity·Claude·Gemini·Copilot 등 AI 도구에서 인용되어
 *       유입된 방문자를 감지하고 GA4 커스텀 이벤트로 전송합니다.
 *
 * GA4 보고서 조회 방법:
 *   탐색 > 자유 형식 보고서
 *   - 측정기준: event_name = "ai_referral", ai_source, cited_page
 *   - 측정항목: 이벤트 수
 *   - 기간 비교: 주간(7일)
 *   → 인용된 페이지, 인용 출처(AI 도구), 주간 집계 확인 가능
 *
 * ※ "인용된 쿼리" 항목: AI 도구들은 referer에 검색어를 포함하지 않으므로
 *    클라이언트 JS에서 직접 추출 불가. Search Console의 "쿼리" 탭 또는
 *    UTM 파라미터로 링크를 공유할 경우 ga_source/ga_campaign으로 추적 가능.
 */
(function () {
  'use strict';

  /** AI 도구 도메인 → 표시 이름 매핑 */
  var AI_SOURCES = {
    'chat.openai.com': 'ChatGPT',
    'chatgpt.com': 'ChatGPT',
    'perplexity.ai': 'Perplexity',
    'claude.ai': 'Claude',
    'gemini.google.com': 'Gemini',
    'bard.google.com': 'Gemini',
    'copilot.microsoft.com': 'Microsoft Copilot',
    'bing.com': 'Bing Copilot',
    'you.com': 'You.com',
    'phind.com': 'Phind',
    'kagi.com': 'Kagi',
    'poe.com': 'Poe',
    'character.ai': 'Character.AI',
    'meta.ai': 'Meta AI',
    'grok.x.ai': 'Grok',
    'x.com': 'Grok/X',
  };

  function getAISource(referrer) {
    if (!referrer) return null;
    try {
      var host = new URL(referrer).hostname.replace(/^www\./, '');
      return AI_SOURCES[host] || null;
    } catch (e) {
      return null;
    }
  }

  var ref = document.referrer;
  var aiSource = getAISource(ref);

  if (!aiSource) return;

  function sendGAEvent() {
    if (typeof gtag === 'function') {
      gtag('event', 'ai_referral', {
        event_category: 'GEO',
        ai_source: aiSource,          // 인용 위치 (어떤 AI 도구)
        cited_page: window.location.pathname,  // 인용된 페이지
        referrer_full: ref,           // 전체 리퍼러 URL
        page_title: document.title,
      });
    }

    // 세션 로그 (디버깅/분석용 — 최대 20건 유지)
    try {
      var log = JSON.parse(sessionStorage.getItem('_geo_ai_log') || '[]');
      log.push({
        source: aiSource,
        ref: ref,
        page: window.location.pathname,
        ts: new Date().toISOString(),
      });
      sessionStorage.setItem('_geo_ai_log', JSON.stringify(log.slice(-20)));
    } catch (e) {}
  }

  // GA4 gtag는 인라인 스크립트로 동기 정의되므로 defer 로드 시점에 사용 가능
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', sendGAEvent);
  } else {
    sendGAEvent();
  }
})();
