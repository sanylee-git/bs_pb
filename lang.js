(() => {
    const LANG_KEY = 'lang';
    const DEFAULT = 'ko';

    const translations = {
        ko: {
            // --- 공통 네비 ---
            'shared.nav.home': '홈',
            'shared.nav.about': '소개',
            'shared.nav.privacy': '개인정보처리방침',

            // --- index.html ---
            'index.hero.title': '업무 스케줄 관리, 주 단위로 스마트하게',
            'index.hero.subtitle': 'CW Calendar와 함께 연간 업무 계획을 주차(Calendar Week) 기준으로 명확하게 파악하고 관리하여 생산성을 높여보세요.',

            'index.calendar.noWeekSelected': '선택된 주 없음',
            'index.calendar.prevYear': '이전 년도',
            'index.calendar.nextYear': '다음 년도',

            'index.cw.title': '주차(Calendar Week)란 무엇일까요?',
            'index.cw.body': '주차(CW)는 1년 중 특정 주를 서수로 나타내는 표준 방식(ISO 8601)입니다. 많은 기업, 특히 글로벌 협업이 잦은 환경에서는 프로젝트 일정, 마감일, 주간 보고 등을 주차 기준으로 관리합니다. 이를 통해 "3월 마지막 주"와 같은 모호한 표현 대신 "CW13"과 같이 명확하게 소통하여 혼동을 줄일 수 있습니다.',

            'index.tips.title': '스마트한 스케줄 관리를 위한 팁',
            'index.tips.item1.label': '주차(CW) 기준으로 계획하기:',
            'index.tips.item1.body': ' 분기별, 월별 목표를 주차 단위로 세분화하여 프로젝트의 진행 상황을 명확하게 추적하세요.',
            'index.tips.item2.label': '중요 마감일 표시:',
            'index.tips.item2.body': ' 연간 캘린더에서 핵심 프로젝트의 마감일이 포함된 주를 시각적으로 강조하여 전체적인 시간 계획을 수립하세요.',
            'index.tips.item3.label': '팀과 공유:',
            'index.tips.item3.body': ' 팀원들과 주차 기준으로 업무를 공유하고 논의하면, 모두가 동일한 시간표에 따라 움직일 수 있습니다.',
            'index.tips.item4.label': '규칙적인 검토:',
            'index.tips.item4.body': ' 매주 초(예: 월요일), 해당 주차의 목표와 주요 업무를 검토하는 시간을 가지세요.',
            'index.tips.item5.label': '공휴일 활용:',
            'index.tips.item5.body': ' 한국과 미국의 공휴일을 미리 확인하여 업무 집중 기간과 휴식 기간을 전략적으로 배분하세요.',

            'index.contact.title': '제휴 문의',
            'index.contact.subtitle': '비즈니스 제휴 및 협업 문의를 남겨주시면 빠르게 답변드리겠습니다.',
            'index.contact.nameLabel': '이름',
            'index.contact.namePlaceholder': '이름을 입력하세요',
            'index.contact.emailLabel': '이메일',
            'index.contact.emailPlaceholder': '이메일을 입력하세요',
            'index.contact.messageLabel': '문의 내용',
            'index.contact.messagePlaceholder': '문의 내용을 입력하세요',
            'index.contact.submit': '문의 보내기',

            'index.comments.title': '댓글',

            // --- index.html FAQ ---
            'index.faq.title': '자주 묻는 질문',
            'index.faq.q1.question': 'CW Calendar는 어떤 서비스인가요?',
            'index.faq.q1.summary': 'ISO 8601 표준 주차(CW) 기반의 무료 달력 서비스입니다.',
            'index.faq.q1.detail': 'CW Calendar는 연간 달력을 주차 단위로 시각화하여 업무 일정을 체계적으로 관리할 수 있는 웹 서비스입니다. 2024~2028년 달력과 한국·미국 공휴일을 함께 제공하며, 회원가입 없이 즉시 무료로 이용할 수 있습니다.',
            'index.faq.q2.question': '주차(CW)는 어떻게 계산하나요?',
            'index.faq.q2.summary': 'ISO 8601 기준으로 1월 첫 번째 목요일을 포함한 주가 CW1입니다.',
            'index.faq.q2.detail': '한 주는 월요일에 시작하며, 해당 연도의 첫 번째 목요일을 포함한 주가 CW1(첫째 주)입니다. 이 방식은 유럽과 글로벌 기업에서 국제 표준으로 사용됩니다. CW Calendar는 ISO 8601을 정확히 구현하여 주차 계산의 혼동을 없앱니다.',
            'index.faq.q3.question': '어떤 연도의 달력을 볼 수 있나요?',
            'index.faq.q3.summary': '현재 2024년부터 2028년까지 5개 연도를 지원합니다.',
            'index.faq.q3.detail': '달력 상단 좌우 화살표 버튼으로 연도를 전환하며 2024~2028년 달력을 확인할 수 있습니다. 각 연도의 한국·미국 공휴일 데이터가 포함되어 있으며, 지원 범위는 추후 업데이트로 확장될 예정입니다.',
            'index.faq.q4.question': '스마트폰에서도 편하게 사용할 수 있나요?',
            'index.faq.q4.summary': '네, 모든 기기에 최적화된 반응형 웹 디자인을 제공합니다.',
            'index.faq.q4.detail': 'CW Calendar는 스마트폰·태블릿·PC 등 모든 화면 크기에서 자동으로 최적화된 레이아웃을 제공합니다. 별도의 앱 설치 없이 브라우저에서 바로 이용 가능하며, 라이트·다크·시스템 테마도 지원합니다.',
            'index.faq.q5.question': 'CW와 주차는 같은 뜻인가요?',
            'index.faq.q5.summary': '네, CW(Calendar Week)는 주차의 국제 표준(ISO 8601) 영어 약자입니다.',
            'index.faq.q5.detail': '주차(週次)는 연간 특정 주를 번호로 나타내는 한국어 표현이며, CW는 동일 개념의 국제 표준 영어 약자입니다. 독일에서는 KW(Kalenderwoche)라 부르기도 하며, 세 표현 모두 같은 의미로 사용됩니다. 국내외 팀 협업 시 혼용해도 무방합니다.',

            // --- index.html 리뷰 ---
            'index.review.title': '서비스 평가 및 리뷰',
            'index.review.subtitle': 'CW Calendar를 이용해보셨나요? 여러분의 소중한 의견이 서비스 발전에 큰 힘이 됩니다.',
            'index.review.disqus': '댓글로 리뷰 남기기',
            'index.review.note': '현재 외부 전문 리뷰 플랫폼 등록을 준비 중입니다. 댓글 섹션을 통해 직접 평가를 남겨주시면 감사드립니다.',

            // --- about.html ---
            'about.intro.title': 'CW Calendar 소개',
            'about.intro.body1': 'CW Calendar는 복잡한 프로젝트와 업무 일정을 주차(Calendar Week) 기준으로 명확하게 관리할 수 있도록 돕는 전문적인 도구입니다. 저희는 모든 전문가, 기획자, 매니저분들이 글로벌 표준 방식인 주차 시스템을 통해 업무 효율성을 극대화하고, 보다 체계적으로 스케줄을 관리하기를 바랍니다.',
            'about.intro.body2': '이 사이트는 단순히 주차 정보를 보여주는 것을 넘어, 효과적인 업무 관리 방법과 생산성을 높이기 위한 다양한 팁을 제공하여 여러분의 성공적인 프로젝트 수행을 돕습니다. 저희의 목표는 여러분이 복잡한 일정 속에서 길을 잃지 않고, 모든 업무를 계획대로 완수할 수 있도록 지원하는 것입니다.',
            'about.mission.title': '우리의 미션',
            'about.mission.body': '저희의 미션은 모든 사용자가 자신의 업무 스케줄을 주차(CW) 기반으로 체계적으로 관리하고, 이를 통해 프로젝트의 성공 가능성을 높일 수 있도록 돕는 것입니다. CW Calendar와 함께라면, 더 이상 스케줄 관리가 스트레스가 아닌, 성공을 위한 즐거운 과정이 될 것입니다.',

            // --- about.html FAQ ---
            'about.faq.title': '자주 묻는 질문',
            'about.faq.q1.question': 'CW Calendar는 어떤 분들에게 유용한가요?',
            'about.faq.q1.summary': '글로벌 협업 환경의 직장인, 프리랜서, 프로젝트 매니저에게 유용합니다.',
            'about.faq.q1.detail': '해외 팀과 협업하거나 유럽·독일계 기업과 소통이 잦은 실무자, 연간 일정을 주 단위로 관리하는 PM에게 최적화된 서비스입니다. ISO 8601 주차 시스템을 처음 접하는 분들도 직관적인 UI로 쉽게 활용할 수 있습니다.',
            'about.faq.q2.question': '서비스 이용에 비용이 발생하나요?',
            'about.faq.q2.summary': '완전 무료로, 회원가입도 필요하지 않습니다.',
            'about.faq.q2.detail': 'CW Calendar의 모든 기능은 무료입니다. 로그인·결제 없이 브라우저에서 바로 이용 가능합니다. 서비스 운영 비용은 페이지 내 광고로 충당하며, 사용자 경험에 최소한의 영향만 미치도록 설계되었습니다.',
            'about.faq.q3.question': '공휴일 데이터는 얼마나 정확한가요?',
            'about.faq.q3.summary': '각국 정부 공식 발표 기준으로 검수된 데이터를 사용합니다.',
            'about.faq.q3.detail': '한국 공휴일은 「관공서의 공휴일에 관한 규정」 기준, 미국 공휴일은 연방 공휴일(Federal Holidays) 기준을 따릅니다. 2024~2028년 데이터를 제공하며, 대체 공휴일을 포함한 정확한 날짜 정보를 유지합니다.',
            'about.faq.q4.question': '다크 모드를 지원하나요?',
            'about.faq.q4.summary': '라이트·다크·시스템 세 가지 테마를 지원합니다.',
            'about.faq.q4.detail': '상단 헤더에서 Light, Dark, System 세 가지 테마를 선택할 수 있습니다. System을 선택하면 기기의 다크 모드 설정을 자동 적용하며, 선택한 테마는 브라우저에 저장되어 다음 방문 시에도 유지됩니다.',
            'about.faq.q5.question': 'CW Calendar는 어떤 기술로 만들어졌나요?',
            'about.faq.q5.summary': '순수 HTML·CSS·JavaScript로 만든 경량 정적 웹 서비스입니다.',
            'about.faq.q5.detail': '외부 프레임워크 없이 Vanilla JavaScript와 Web Components 기술로 개발되어 빠르고 가볍습니다. Cloudflare Pages의 글로벌 CDN을 통해 서비스되며, 최소한의 의존성으로 빠른 로딩과 높은 접근성을 제공합니다.',

            // --- privacy.html ---
            'privacy.title': '개인정보처리방침',
            'privacy.lastUpdated': '최종 수정일: 2024년 7월 30일',
            'privacy.s1.title': '1. 총칙',
            'privacy.s1.body': 'CW Calendar(이하 "사이트")는 사용자의 개인정보를 중요하게 생각하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다. 본 개인정보처리방침을 통해 사용자가 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.',
            'privacy.s2.title': '2. 쿠키 사용에 대한 안내',
            'privacy.s2.body1': '본 사이트는 사용자에게 더 나은 서비스를 제공하기 위해 쿠키(Cookie)를 사용합니다. 쿠키는 웹사이트가 사용자의 컴퓨터 브라우저에 보내는 소량의 정보이며, 사용자의 컴퓨터는 식별하지만 사용자를 개인적으로 식별하지는 않습니다.',
            'privacy.s2.body2': '특히, 본 사이트는 다음과 같은 제3자 광고 서비스를 이용합니다:',
            'privacy.s2.li1.label': 'Google AdSense:',
            'privacy.s2.li1.body': ' 본 사이트는 Google AdSense를 통해 광고를 게시하고 있습니다. Google과 같은 제3자 광고 사업자는 쿠키를 사용하여 사용자의 이전 웹사이트 방문 기록을 기반으로 맞춤형 광고를 표시할 수 있습니다.',
            'privacy.s2.li2': 'DoubleClick DART 쿠키를 사용하여 Google 및 Google의 파트너는 본 사이트 및 다른 사이트의 방문 기록을 기반으로 사용자에게 광고를 게재할 수 있습니다.',
            'privacy.s2.li3.pre': '사용자는 ',
            'privacy.s2.li3.link': 'Google 광고 설정',
            'privacy.s2.li3.post': ' 페이지에서 맞춤형 광고 게재에 사용되는 DoubleClick DART 쿠키를 사용하지 않도록 설정할 수 있습니다.',
            'privacy.s3.title': '3. 개인정보의 수집 및 이용 목적',
            'privacy.s3.body': '본 사이트는 주차(CW) 정보 제공 기능 외에 별도의 회원가입이나 개인정보 입력을 요구하지 않습니다. 단, 서비스 이용 과정에서 IP 주소, 쿠키, 방문 일시, 서비스 이용 기록 등이 자동으로 생성되어 수집될 수 있습니다. 이는 서비스 개선 및 통계 분석, 그리고 맞춤형 광고 제공을 위해 사용됩니다.',
            'privacy.s4.title': '4. 개인정보의 보유 및 이용기간',
            'privacy.s4.body': '사용자의 정보는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.',
            'privacy.s5.title': '5. 개인정보처리방침의 변경',
            'privacy.s5.body': '본 개인정보처리방침은 법령 및 방침에 따른 변경 내용의 추가, 삭제 및 정정이 있는 경우에는 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.',

            // --- 캘린더 동적 텍스트 ---
            'calendar.month.jan': '1월',
            'calendar.month.feb': '2월',
            'calendar.month.mar': '3월',
            'calendar.month.apr': '4월',
            'calendar.month.may': '5월',
            'calendar.month.jun': '6월',
            'calendar.month.jul': '7월',
            'calendar.month.aug': '8월',
            'calendar.month.sep': '9월',
            'calendar.month.oct': '10월',
            'calendar.month.nov': '11월',
            'calendar.month.dec': '12월',
            'calendar.day.mon': '월',
            'calendar.day.tue': '화',
            'calendar.day.wed': '수',
            'calendar.day.thu': '목',
            'calendar.day.fri': '금',
            'calendar.day.sat': '토',
            'calendar.day.sun': '일',
            'calendar.selection.text': '선택: {year}년 CW{week} · {start} ~ {end}',
            'calendar.selection.prompt': '주를 선택하세요',
        },
        en: {
            // --- 공통 네비 ---
            'shared.nav.home': 'Home',
            'shared.nav.about': 'About',
            'shared.nav.privacy': 'Privacy Policy',

            // --- index.html ---
            'index.hero.title': 'Work Schedule Management, Smart by Week',
            'index.hero.subtitle': 'With CW Calendar, clearly understand and manage your annual work plan by Calendar Week (CW) to boost productivity.',

            'index.calendar.noWeekSelected': 'No week selected',
            'index.calendar.prevYear': 'Previous year',
            'index.calendar.nextYear': 'Next year',

            'index.cw.title': 'What is a Calendar Week (CW)?',
            'index.cw.body': 'A Calendar Week (CW) is a standard method (ISO 8601) of expressing a specific week of the year as an ordinal number. Many companies, especially in globally collaborative environments, manage project schedules, deadlines, and weekly reports by CW. This allows clear communication like "CW13" instead of vague expressions like "last week of March," reducing confusion.',

            'index.tips.title': 'Tips for Smart Schedule Management',
            'index.tips.item1.label': 'Plan by Calendar Week (CW):',
            'index.tips.item1.body': ' Break down quarterly and monthly goals into weekly units to clearly track project progress.',
            'index.tips.item2.label': 'Mark Key Deadlines:',
            'index.tips.item2.body': ' Visually highlight the weeks containing key project deadlines on the annual calendar to establish an overall time plan.',
            'index.tips.item3.label': 'Share with Your Team:',
            'index.tips.item3.body': ' Sharing and discussing tasks with team members by CW ensures everyone moves according to the same schedule.',
            'index.tips.item4.label': 'Regular Reviews:',
            'index.tips.item4.body': ' At the start of each week (e.g., Monday), take time to review the goals and key tasks for that week.',
            'index.tips.item5.label': 'Utilize Public Holidays:',
            'index.tips.item5.body': ' Check Korean and US public holidays in advance to strategically allocate periods of focused work and rest.',

            'index.contact.title': 'Partnership Inquiry',
            'index.contact.subtitle': 'Leave your business partnership and collaboration inquiries and we will get back to you promptly.',
            'index.contact.nameLabel': 'Name',
            'index.contact.namePlaceholder': 'Enter your name',
            'index.contact.emailLabel': 'Email',
            'index.contact.emailPlaceholder': 'Enter your email',
            'index.contact.messageLabel': 'Message',
            'index.contact.messagePlaceholder': 'Enter your message',
            'index.contact.submit': 'Send Message',

            'index.comments.title': 'Comments',

            // --- index.html FAQ (EN) ---
            'index.faq.title': 'Frequently Asked Questions',
            'index.faq.q1.question': 'What is CW Calendar?',
            'index.faq.q1.summary': 'A free calendar service based on the ISO 8601 Calendar Week (CW) standard.',
            'index.faq.q1.detail': 'CW Calendar is a web service that visualizes annual calendars week-by-week to help you systematically manage work schedules. It provides calendars for 2024–2028 with Korean and US public holidays, all free without registration.',
            'index.faq.q2.question': 'How is a Calendar Week (CW) calculated?',
            'index.faq.q2.summary': 'Per ISO 8601, CW1 is the week containing the first Thursday of January.',
            'index.faq.q2.detail': 'A week starts on Monday, and CW1 is the week containing the first Thursday of the year. This standard is widely used by European and global companies. CW Calendar implements ISO 8601 precisely, eliminating any confusion in week numbering.',
            'index.faq.q3.question': 'Which years does CW Calendar support?',
            'index.faq.q3.summary': 'Currently supports 5 years: 2024 through 2028.',
            'index.faq.q3.detail': 'Use the left/right arrow buttons at the top of the calendar to navigate between 2024 and 2028. Public holiday data for Korea and the US is included for all supported years, with plans to expand coverage in future updates.',
            'index.faq.q4.question': 'Is CW Calendar optimized for mobile?',
            'index.faq.q4.summary': 'Yes, it provides a responsive design optimized for all devices.',
            'index.faq.q4.detail': 'CW Calendar automatically adapts its layout for smartphones, tablets, and PCs. No app installation is needed — just use it in your browser. Light, dark, and system themes are also fully supported.',
            'index.faq.q5.question': 'Are "CW" and "week number" the same thing?',
            'index.faq.q5.summary': 'Yes, CW (Calendar Week) is the international standard abbreviation for the same concept.',
            'index.faq.q5.detail': 'CW stands for Calendar Week — the ISO 8601 standard term for numbering the weeks of a year. Germany uses "KW (Kalenderwoche)" for the same concept. All three terms refer to the same standardized week-numbering system and can be used interchangeably.',

            // --- index.html Review (EN) ---
            'index.review.title': 'Rate & Review This Service',
            'index.review.subtitle': 'Have you tried CW Calendar? Your feedback helps us improve and grow.',
            'index.review.disqus': 'Leave a Review (Comments)',
            'index.review.note': 'We are currently preparing listings on external review platforms. Please share your thoughts in the comments section below.',

            // --- about.html ---
            'about.intro.title': 'About CW Calendar',
            'about.intro.body1': 'CW Calendar is a professional tool that helps you clearly manage complex projects and work schedules based on Calendar Weeks (CW). We hope all professionals, planners, and managers can maximize work efficiency and manage schedules more systematically through the globally standard CW system.',
            'about.intro.body2': 'This site goes beyond simply displaying CW information — it also provides effective work management methods and various productivity tips to help you successfully execute your projects. Our goal is to support you in completing all tasks as planned, so you never lose your way in a complex schedule.',
            'about.mission.title': 'Our Mission',
            'about.mission.body': 'Our mission is to help all users systematically manage their work schedules on a CW basis, thereby increasing the likelihood of project success. With CW Calendar, schedule management will no longer be a source of stress — it will become an enjoyable process on the road to success.',

            // --- about.html FAQ (EN) ---
            'about.faq.title': 'Frequently Asked Questions',
            'about.faq.q1.question': 'Who is CW Calendar useful for?',
            'about.faq.q1.summary': 'Ideal for professionals, freelancers, and project managers in global work environments.',
            'about.faq.q1.detail': 'CW Calendar is optimized for those who collaborate with overseas teams, frequently communicate with European or German companies, or manage annual schedules by week. Even beginners to the ISO 8601 system can easily use it with our intuitive UI.',
            'about.faq.q2.question': 'Is there any cost to use CW Calendar?',
            'about.faq.q2.summary': 'Completely free with no registration required.',
            'about.faq.q2.detail': 'All features of CW Calendar are free. Use it directly in your browser without logging in or paying. Operating costs are covered by page ads, which are designed to minimize impact on the user experience.',
            'about.faq.q3.question': 'How accurate is the holiday data?',
            'about.faq.q3.summary': 'Holiday data is verified against official government announcements.',
            'about.faq.q3.detail': 'Korean holidays follow the official "Regulations on Holidays of Public Offices," and US holidays follow the Federal Holiday schedule. The data covers 2024–2028, including substitute holidays, and is maintained for accuracy.',
            'about.faq.q4.question': 'Is dark mode supported?',
            'about.faq.q4.summary': 'Yes, Light, Dark, and System themes are all supported.',
            'about.faq.q4.detail': 'Choose from Light, Dark, or System themes in the header. The System option automatically follows your device\'s dark mode setting, and your theme preference is saved in your browser for future visits.',
            'about.faq.q5.question': 'What technology is CW Calendar built with?',
            'about.faq.q5.summary': 'A lightweight static web service built with pure HTML, CSS, and JavaScript.',
            'about.faq.q5.detail': 'CW Calendar is built with Vanilla JavaScript and Web Components — no external frameworks. It is served via Cloudflare Pages\' global CDN, offering fast loading speeds and high accessibility with minimal dependencies.',

            // --- privacy.html ---
            'privacy.title': 'Privacy Policy',
            'privacy.lastUpdated': 'Last Updated: July 30, 2024',
            'privacy.s1.title': '1. General Provisions',
            'privacy.s1.body': 'CW Calendar (hereinafter "the Site") values the personal information of users and complies with the Act on Promotion of Information and Communications Network Utilization and Information Protection. Through this Privacy Policy, we inform users of the purposes and methods by which the personal information they provide is used, and the measures taken to protect it.',
            'privacy.s2.title': '2. Notice on Cookie Use',
            'privacy.s2.body1': 'This site uses cookies to provide a better service to users. Cookies are small pieces of information sent by a website to your browser; they identify your computer but do not personally identify you.',
            'privacy.s2.body2': 'In particular, this site uses the following third-party advertising services:',
            'privacy.s2.li1.label': 'Google AdSense:',
            'privacy.s2.li1.body': ' This site displays ads through Google AdSense. Third-party advertising providers such as Google may use cookies to display personalized ads based on your previous visits to this and other sites.',
            'privacy.s2.li2': 'Using the DoubleClick DART cookie, Google and its partners can serve ads to you based on your visits to this site and other sites on the internet.',
            'privacy.s2.li3.pre': 'You may opt out of the use of the DoubleClick DART cookie for personalized advertising by visiting the ',
            'privacy.s2.li3.link': 'Google Ad Settings',
            'privacy.s2.li3.post': ' page.',
            'privacy.s3.title': '3. Purpose of Collecting and Using Personal Information',
            'privacy.s3.body': 'This site does not require separate membership registration or personal information entry beyond providing CW information. However, in the course of using the service, information such as IP addresses, cookies, visit date/time, and service usage records may be automatically generated and collected. This is used for service improvement, statistical analysis, and delivery of personalized ads.',
            'privacy.s4.title': '4. Retention and Use Period of Personal Information',
            'privacy.s4.body': 'User information is processed and retained within the personal information retention and use period stipulated by law, or within the period agreed to at the time personal information was collected from the data subject.',
            'privacy.s5.title': '5. Changes to the Privacy Policy',
            'privacy.s5.body': 'If there are additions, deletions, or corrections to this Privacy Policy due to changes in laws or policies, we will notify users via a notice on the website (or individual notices).',

            // --- 캘린더 동적 텍스트 ---
            'calendar.month.jan': 'Jan',
            'calendar.month.feb': 'Feb',
            'calendar.month.mar': 'Mar',
            'calendar.month.apr': 'Apr',
            'calendar.month.may': 'May',
            'calendar.month.jun': 'Jun',
            'calendar.month.jul': 'Jul',
            'calendar.month.aug': 'Aug',
            'calendar.month.sep': 'Sep',
            'calendar.month.oct': 'Oct',
            'calendar.month.nov': 'Nov',
            'calendar.month.dec': 'Dec',
            'calendar.day.mon': 'Mon',
            'calendar.day.tue': 'Tue',
            'calendar.day.wed': 'Wed',
            'calendar.day.thu': 'Thu',
            'calendar.day.fri': 'Fri',
            'calendar.day.sat': 'Sat',
            'calendar.day.sun': 'Sun',
            'calendar.selection.text': 'Selected: CW{week} {year} · {start} ~ {end}',
            'calendar.selection.prompt': 'Please select a week',
        }
    };

    // main.js에서 번역값 조회용
    window.i18n = {
        t(key) {
            const lang = document.documentElement.dataset.lang || DEFAULT;
            return translations[lang]?.[key] ?? translations[DEFAULT][key] ?? key;
        }
    };

    function applyTranslations(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dataset.lang = lang;

        // textContent 교체
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const v = translations[lang]?.[el.dataset.i18n] ?? translations[DEFAULT][el.dataset.i18n];
            if (v !== undefined) el.textContent = v;
        });

        // placeholder 교체
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const v = translations[lang]?.[el.dataset.i18nPlaceholder] ?? translations[DEFAULT][el.dataset.i18nPlaceholder];
            if (v !== undefined) el.placeholder = v;
        });

        // aria-label 교체
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const v = translations[lang]?.[el.dataset.i18nAria] ?? translations[DEFAULT][el.dataset.i18nAria];
            if (v !== undefined) el.setAttribute('aria-label', v);
        });

        // 활성 버튼 표시
        document.querySelectorAll('[data-lang-switcher]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.langSwitcher === lang);
        });

        // 캘린더 재렌더 (index.html 전용)
        document.querySelectorAll('month-calendar').forEach(cal => cal.render());

        // 선택된 주 표시 텍스트 갱신
        if (typeof window.__refreshWeekDisplay === 'function') {
            window.__refreshWeekDisplay();
        }
    }

    function setLang(lang) {
        if (!translations[lang]) return;
        localStorage.setItem(LANG_KEY, lang);
        applyTranslations(lang);
    }

    // 즉시 실행: DOMContentLoaded 전에 dataset.lang 설정 (main.js render 시 i18n.t() 참조용)
    const saved = localStorage.getItem(LANG_KEY) || DEFAULT;
    document.documentElement.dataset.lang = saved;
    document.documentElement.lang = saved;

    document.addEventListener('DOMContentLoaded', () => {
        applyTranslations(saved);
        document.querySelectorAll('[data-lang-switcher]').forEach(btn => {
            btn.addEventListener('click', () => setLang(btn.dataset.langSwitcher));
        });
    });
})();
