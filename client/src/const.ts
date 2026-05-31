// Design Theme: Premium Light Clean (A안 - Leaf Grid)
// Integrating comprehensive data from ES Landscape's business masterplan.

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: "slope" | "public" | "private" | "esg";
  year: string;
  budget: string;
  kpis: { label: string; value?: string; before?: string; after?: string }[];
  description: string;
  longDescription: string;
  image: string;
  highlights: string[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  kpi: { label: string; value: string };
  icon: string;
}

export const SERVICES: ServiceDetail[] = [
  {
    id: "slope",
    title: "친환경 사면복원 · 녹화",
    tagline: "다층복합보강구조 특허 시스템 (출원 진행)",
    description: "특허 출원 중인 다층복합보강구조 시스템으로 급경사 및 절토면 사면을 영구히 보강하고 생태계를 완벽하게 복원합니다. 토사 유실 방지율 70% 향상 및 식생활착률 95% 이상을 달성하는 차세대 사면 보강 복합 공법입니다.",
    features: [
      "식생층: 생분해 식생매트(코코넛, 황마, PLA)와 종자의 최적 결합으로 우기 토양 보호 및 신속 활착 유도",
      "식생기반층: 기후 변화에 대응하는 바이오차(Biochar) 및 제올라이트 혼합 특수 토양(50~100mm)으로 수분·영양 저장",
      "보강층: 인장강도 20kN/m 이상의 고인장 HDPE 지오그리드로 토양 변형 및 비탈면 슬라이딩 방지",
      "고정층: L형 앵커핀(500~800mm 매입) + 연결판 + 와셔 + 너트의 이중 잠금 체계로 간극수압 지탱",
      "배수층: 간극수압을 최소화하고 원활한 지하수 배출을 유도하는 배수 자갈층(100~150mm) 및 유공관 시공"
    ],
    kpi: { label: "토사 유실 방지율", value: "70% 향상" },
    icon: "ShieldAlert"
  },
  {
    id: "landscape",
    title: "공공 · 산업단지 조경 시공",
    tagline: "지자체 및 종합건설 우수 협력 파트너",
    description: "5년간 25건의 풍부한 시공 실적과 시공능력평가액 9.8억원 규모의 탄탄한 역량을 바탕으로 지자체 공원녹지, 가로수 정비, 대형 산업단지 및 민간 상업 시설 조경공사를 완벽하고 안전하게 준공합니다.",
    features: [
      "조경식재공사 및 조경시설물설치공사 동시 수행 면허 보유로 일괄 시공 가능",
      "여성기업 확인서(2026.02) 보유로 나라장터 수의계약 한도 5천만원(일반의 2.5배) 적용",
      "조경식재·시설물공사업 등록 기술인력(조경기능사, 굴삭기기능사 등) 직접 현장 배치 및 시공",
      "지자체, 관공서, 학교 및 대형 종합건설사 하도급 안전보건 관리 기준(ISO 통합 인증 추진) 충족",
      "철저한 준공 후 수목 생육 모니터링 및 2년 하자보증 보장"
    ],
    kpi: { label: "식생 활착률", value: "98% 달성" },
    icon: "Trees"
  },
  {
    id: "maintenance",
    title: "연간 유지관리 정기계약",
    tagline: "도시 녹지 자산의 지속가능한 가치 보존",
    description: "공원녹지, 가로수, 아파트 및 빌딩 조경 시설의 체계적인 정기 관리를 통해 수목의 건전한 생육을 도모하고 도심지 녹지 자산 가치를 극대화합니다.",
    features: [
      "계절별 맞춤형 조경 수목 전정, 전지 및 고사목 제거 작업",
      "수목 생리 조절 및 돌발 병해충 정밀 방제(친환경 방제 약제 우선 사용)",
      "토양 개량제(바이오차 및 제올라이트) 투입을 통한 척박지 토양 활력 복원",
      "잔디 예초, 잡초 제초 및 관수 작업의 주기적 실시",
      "노후 조경 시설물(벤치, 파고라, 분수대 등) 정밀 안전점검 및 즉각 보수"
    ],
    kpi: { label: "유지관리 비용", value: "50% 절감" },
    icon: "CalendarRange"
  },
  {
    id: "planterior",
    title: "실내 플랜테리어 & 식물 케어",
    tagline: "B2B 오피스 식물 렌탈 및 스마트 구독",
    description: "도심 속 업무 공간 및 공공기관 실내에 푸른 숨결을 불어넣습니다. 스마트 IoT 센서와 전문가 케어가 결합된 실내 정원 및 수직정원 렌탈 구독 솔루션을 제안합니다.",
    features: [
      "기업 사옥, 대형 병원, 요양원 맞춤형 친환경 실내 정원(벽면녹화, 플랜터) 기획 설계",
      "스마트 IoT 센서 기반 자동 관수 및 생육 상태 실시간 모니터링 시스템 구축",
      "전문 식물관리사의 정기 방문(월 2~4회) 정밀 케어 및 수목 영양제 투입",
      "계절 변화에 따른 고품질 초화 및 관엽식물 무상 정기 교체",
      "실내 공기질 개선(미세먼지, 휘발성 유기화합물 저감) 효과 정량 리포트 발행"
    ],
    kpi: { label: "업무 생산성", value: "15% 향상" },
    icon: "Leaf"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-slope-1",
    title: "특허 공법 기반 급경사 사면 복원 및 식생 녹화",
    client: "경기도 광주 도로 절토면 현장",
    category: "slope",
    year: "2025",
    budget: "1억 2,000만원",
    kpis: [
      { label: "식생 활착률", before: "30%", after: "96%" },
      { label: "토사 유실율", before: "100%", after: "15%" },
      { label: "탄소 저장량", value: "1.8배 증가" }
    ],
    description: "기존 공법으로 식생 활착이 불가능했던 65도 급경사 절토면에 다층복합보강구조 시스템을 적용하여, 우기 토사 유실을 완벽히 차단하고 96% 이상의 녹화를 달성했습니다.",
    longDescription: "본 프로젝트는 집중호우 시 상습적인 토사 붕괴 위험이 있던 경기도 광주시의 도로 비탈면을 대상으로 진행되었습니다. 특허 기술인 다층복합보강구조 시스템의 5단계 레이어 공법을 적용했습니다. 특히 식생기반층에 탄소 저장 효과가 뛰어난 바이오차(Biochar)와 제올라이트를 혼합 시공하여, 척박한 마사토 사면에서도 식생 종자가 유실되지 않고 빠르게 활착할 수 있는 최적의 생육 환경을 제공했습니다.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283438125/4Ty34aTXnHdjiTU7VWcZUo/slope_stabilization-o5iJtUGAFBYmYxNxieYdXA.webp",
    highlights: [
      "HDPE 지오그리드 보강으로 사면 내부 전단 강도 대폭 강화",
      "L형 앵커핀 이중 고정 공법으로 우기 간극수압 상승 시에도 붕괴 방지",
      "바이오차 배합 식생기반재 시공으로 ㎡당 2kg의 탄소 격리 실현",
      "준공 후 1년간 정밀 계측 모니터링 결과 변형률 0% 달성"
    ]
  },
  {
    id: "cs-public-1",
    title: "지자체 도시공원 친환경 식재 및 경관 조성",
    client: "영암군청 도시공원과",
    category: "public",
    year: "2025",
    budget: "4,512만원",
    kpis: [
      { label: "초화 활착률", before: "75%", after: "98%" },
      { label: "시공 기간", before: "25일", after: "18일" },
      { label: "탄소 감축량", value: "연간 1.2톤" }
    ],
    description: "영암군 도심 내 유휴 공원 부지에 메리골드 12,000본을 비롯한 친환경 초화류를 식재하여 시민들을 위한 도심 속 탄소중립 힐링 정원을 조성했습니다.",
    longDescription: "영암군청 발주로 진행된 본 공사는 도심 속 유휴 공원을 생태적으로 건강하고 아름다운 공간으로 탈바꿈하는 프로젝트였습니다. 당사는 소기업 및 여성기업 우대 혜택을 바탕으로 수주에 성공했으며, 정교한 식재 계획 하에 고품질 초화를 적기 시공했습니다. 특히 토양 개량을 위해 친환경 자재를 전격 도입하여 가뭄과 장마철에도 초화류가 안정적으로 생장할 수 있는 기반을 구축했습니다.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283438125/4Ty34aTXnHdjiTU7VWcZUo/urban_park-EiigRRy5QtdCVY69xddPh9.webp",
    highlights: [
      "메리골드 등 탄소 흡수 능력이 우수한 정밀 초화류 12,000본 식재",
      "자체 특허 배합 친환경 완효성 비료 시공으로 생육 활력 극대화",
      "지역 일자리 창출을 위해 경기·전남 지역 전문 기능인력 100% 고용",
      "공공조달 적격심사 가점 요건을 충족하는 완벽한 서류 및 공정 관리"
    ]
  },
  {
    id: "cs-private-1",
    title: "대기업 산업단지 친환경 조경공사 및 ESG 정원",
    client: "대웅건설 종합 하도급",
    category: "private",
    year: "2025",
    budget: "3,500만원",
    kpis: [
      { label: "안전 사고율", before: "0.1%", after: "0%" },
      { label: "자원 순환율", before: "40%", after: "85%" },
      { label: "하자 발생률", before: "5%", after: "0.2%" }
    ],
    description: "신축 산업단지 내에 친환경 자재와 재활용 플랜터를 활용한 대규모 ESG 테마 정원을 조성하여 종합건설사의 까다로운 안전·품질 기준을 완벽히 충족했습니다.",
    longDescription: "대웅건설의 협력사로서 참여한 본 프로젝트는 신축 친환경 산업단지 내의 공용 휴식 공간을 조성하는 공사였습니다. 당사는 폐플라스틱`과 폐목재를 업사이클링한 고품질 조경 자재와 벤치, 플랜터를 적극 도입하여 친환경 건축물 인증에 기여했습니다. 종합건설사의 철저한 안전 관리 기준에 맞추어 모든 공정 전에 안전관리계획서를 제출하고, 100% 무사고로 조기 준공을 달성하여 우수 파트너십을 구축했습니다.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283438125/4Ty34aTXnHdjiTU7VWcZUo/biochar_tech-kGSekntoTish9svJe5iXYM.webp",
    highlights: [
      "친환경 자원순환 자재 활용률 85% 이상 달성",
      "대형 건설사 하도급 안전 보건 관리 체계(ISO 45001 기준) 완벽 준수",
      "기업의 ESG 보고서에 등재 가능한 '1t CO₂ 흡수 정원' 패키지 적용",
      "VVIP 및 바이어 응대를 위한 최고급 실외 정원 디자인 기획 및 시공"
    ]
  }
];

export const INSIGHTS = [
  {
    id: "report-1",
    title: "2026 대한민국 기후위기 대응 사면복원 기술 트렌드",
    author: "한승재 수석 전략 자문",
    date: "2026.05.28",
    category: "기술 보고서",
    summary: "지속적인 집중호우와 산사태 발생 빈도 증가에 따른 전통 사면 공법의 한계를 지적하고, 다층복합보강구조와 바이오차 토양 기술의 융합이 가져올 차세대 사면 복원 표준을 제시합니다.",
    readTime: "8분"
  },
  {
    id: "report-2",
    title: "조경 건설 기업의 ESG 도입 전략과 탄소 저감 효과 검증",
    author: "박은선 대표이사",
    date: "2026.05.15",
    category: "ESG 경영",
    summary: "시공 현장 1㎡당 약 2kg의 이산화탄소를 격리하는 바이오차 토양 개량 공법의 과학적 근거와, 이를 기업 ESG 평가 및 공공조달 입찰 가점에 활용하는 전략적 로드맵을 공유합니다.",
    readTime: "6분"
  },
  {
    id: "report-3",
    title: "지자체 공공조달(나라장터) 입찰 성공을 위한 우대확인서 6종 가이드",
    author: "전략기획실 공공조달팀",
    date: "2026.04.30",
    category: "공공 조달",
    summary: "소기업·소상공인, 여성기업, 직접생산확인, 녹색기술인증 등 적격심사 가점 만점을 확보하기 위해 조경식재 법인이 즉시 준비해야 할 핵심 인증 로드맵과 실무 가이드를 제공합니다.",
    readTime: "10分"
  }
];

export const CEO_MESSAGE = {
  name: "박은선",
  title: "대표이사",
  photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283438125/4Ty34aTXnHdjiTU7VWcZUo/ceo_main-WiaURJufF8tRbKKuET6bMv.webp", // New high-quality AI CEO photo
  photoSub: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283438125/4Ty34aTXnHdjiTU7VWcZUo/ceo_main-AnMkgvQVZi39KpudibqgBS.png", // Alternative CEO photo
  philosophy: "“뿌리가 깊은 나무는 흔들리지 않는다.” — 정직한 시공, 지속가능한 약속, 사람을 향한 조경",
  quote: "우리가 하는 일은 단순한 '공사'가 아니라, 상처받은 자연과 도심을 되살리는 '생태 복원'입니다.",
  paragraphs: [
    "안녕하십니까. (주)이에스조경 대표이사 박은선입니다. 저는 한 그루의 나무가 어떻게 흙을 붙들고, 비탈을 지키고, 도시를 숨 쉬게 하는지를 매일 현장에서 마주합니다. 무너진 사면 위에 다시 뿌리를 내리는 풀 한 포기를 볼 때, 비로소 우리가 하는 일이 '공사'가 아니라 '복원'이라는 것을 깨닫습니다.",
    "이에스(ES)는 두 글자에 우리의 약속을 담았습니다. Eco — 자연을 닮은 친환경 기술. Sustainable — 한 번 심고 끝나지 않는 지속가능한 가꿈. 우리는 바이오차로 토양에 탄소를 가두고, 생분해되는 식생매트로 환경을 더럽히지 않으며, 자체 개발한 다층복합보강구조 시스템으로 산사태로 무너진 땅을 다시 살려냅니다.",
    "조경은 화려한 산업이 아닙니다. 그러나 어느 산업보다도 '사람의 마음'과 가깝습니다. 학교 운동장 옆 화단의 노란 메리골드 한 송이, 병원 로비의 작은 화분 하나, 일터 옥상의 작은 정원 한 평이 누군가의 하루를 조금 더 살 만하게 만든다는 것을 우리는 잘 알고 있습니다.",
    "여성기업으로서 더 섬세하게, 소기업으로서 더 정직하게, 친환경 기업으로서 더 미래지향적으로 — (주)이에스조경은 사람과 자연이 함께 자라는 '다음 세대의 조경'을 짓겠습니다. 정책자금, 공공조달, 민간시장 어디에서도 신뢰받는 파트너가 되겠습니다. 감사합니다."
  ]
};

export const COMPANY_INFO = {
  name: "(주)이에스조경",
  engName: "ES Landscape Co., Ltd.",
  ceo: "박은선",
  founded: "2020년 06월 12일",
  capital: "155,000,000원",
  address: "경기도 광주시 장지1길 85-8, 201호(역동)",
  tel: "031-762-3450",
  fax: "031-762-3451",
  email: "esjk2025@naver.com",
  licenseNo: "조경식재·시설물공사업 (제 2020-16-05호)",
  businessNo: "592-87-01625",
  corpNo: "205411-0033219",
  capacity: "983,046,000원 (2025년 기준 시공능력평가액)",
  credit: "EW등급 (CREVIEW 신용평가인증)",
  certifications: [
    "여성기업 확인서 보유 (수의계약 한도 5천만원 확대)",
    "조경식재공사 및 조경시설물설치공사 동시 수행 자격",
    "전문공제조합 가입 및 보증 완비",
    "ISO 9001 · 14001 · 45001 통합 인증 추진 중"
  ]
};

export const HISTORY = [
  { year: "2020.06", event: "주식회사 설립 및 조경식재공사업 면허 등록 (제 2020-16-05호)" },
  { year: "2021.04", event: "지자체 소액수의계약 및 공공시설 조경공사 진입" },
  { year: "2022.09", event: "대형 종합건설사 협력업체 등록 및 산업단지 하도급 시공 개시" },
  { year: "2023.11", event: "누적 시공 실적 15건 달성 및 시공능력평가액 지속 상승" },
  { year: "2024.05", event: "친환경 생분해 자재 조경 및 사면복원 기술 개발 착수" },
  { year: "2025.11", event: "박은선 대표이사 취임 및 사명을 '주식회사 이에스조경'으로 변경 (Eco-Sustainable 비전 정립)" },
  { year: "2026.02", event: "중소벤처기업부 여성기업 확인서 획득 및 수의계약 혜택 강화" },
  { year: "2026.05", event: "독자적 사면 공법인 '다층복합보강구조 시스템' 특허 출원 진행 및 ESG 탄소 저감 조경 패키지 출시" }
];
