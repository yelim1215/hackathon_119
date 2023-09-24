# hackathon_119
### ‘응답하라 119’ : 응급환자 재이송 해결을 위한 응급실 가용 병상 조회 서비스
### 금오공과대학교 컴퓨터공학과 & 컴퓨터소프트웨어공학과(WebKit)
개발 환경 : React, styled-components

------------

## 서비스 설명
> ### 추진 배경
#### • 최근 위급 환자 발생으로 인해 응급실 병상 부족으로 응급환자 재이송 건수 증가
 - 소방청 발표 자료에 의하면 지난해 병원의 거부로 인한 환자 재이송은 총 6,840건
 - 재이송으로 인한 치료 지연으로 전반적인 치료 효율 저하 및 응급환자 사망률 증가
#### • 병원별 응급 환자를 위한 가용 병상 조회 시스템의 필요성
 - 환자의 이송 과정에서 발생하는 혼잡 최소화로 생명 보존 필요   - 사용자의 빠른 가용 병상 수 파악과 적절한 의료시설 선택이 중요

> ### 기능
#### • 응급실 조회
 - 위치 설정 및 내 위치 사용 가능 : 환자 또는 긴급요원(소방, 경찰 등)은 직접 현재 위치 설정 또는 내 위치 자동 설정 가능
 - 응급실 조회 : 사용자 위치 기준으로 가장 가깝고 가용한 응급실 안내
 - 환자 상태에 따른 응급 병실 구분 검색 : 음압격리/일반격리/중환자실/소아중환자실/입원실 선택에 따른 환자 상태 맞춤형 조건 검색 가능
 - 세부 현황 보기 : ‘세부 현황’ 버튼을 통해 추가 응급실 목록 제공
 - 응급실 목록 정렬 : 응급실 목록은 거리 순으로 정렬하여 제공
 - 가용 병상 수에 따른 핀 색상 차별화 : 지도에 응급실 위치를 표시할 때, 병상 수에 따라 지도 핀의 색깔을 빨강/노랑/초록으로 설정하여 병상 수를 한눈에 알아보기 쉽게 제공
#### • 응급실 상세 조회
 - 거리, 가용 병상 수, 전화번호 등의 기본 정보 제공
 - 운영시간, 진료 종류 등의 상세 정보 제공
 - 응급실 길 찾기 기능 제공

> ### 기대 효과
#### • 의료 시스템의 안정성과 품질 향상
 - 위급환자의 분류의 따른 검색으로 맞춤 의료 서비스 제공 가능
#### • 환자에게 신속하고 효율적인 의료 서비스 제공 가능
 - 지도 시각화를 통해 직관적으로 가용 병상의 수를 확인함으로써 신속한 환자 이송

------------

## 팀 설명
### 팀 소개
#### • 금오공과대학교 컴퓨터공학 및 소프트웨어공학과 관련 전공 학생으로 팀 구성
  - 학부과정에서 SW 관련 전공 및 다양한 프로젝트 경험
#### • 「SW 전문 인재 양성사업」 금오공과대학교[Webkit640] 수료
 - Webkit640: 경북 네트워크형 캠퍼스 SW(웹) 아카데미
 - 포항테크노파크 주관 팀 프로젝트 발표회에서 최우수 및 우수상 수상
#### • 팀 프로젝트 개발 경험
 - 공공 데이터와 지도 API를 활용한 실시간 수질 모니터링 웹 
 - 지도 API를 활용한 여행 코스 공유 커뮤니티 앱
 - 정렬 기준에 따른 장애인 구직 공고 검색 사이트 등

### 역할
팀장 : 이예림

api-location : 여경호
api-hospital : 박민규
component : 이예림, 최훈, 박유경

### 팀 운영 규칙
① 업무 마감 기한을 엄수합니다. 
② API 명세서 작성은 필수 사항입니다. 
③ 커밋 메시지는 명확하고 구체적으로 작성합니다. 
④ PR (Pull Request)는 최소 2명 이상의 팀원이 리뷰하도록 합니다. 
⑤ 주간 회의는 필 attendance로 하며, 불참 시 사전에 통보합니다. 
⑥ 코드 리뷰 시, 상대방의 코드를 존중하면서도 진솔한 피드백을 제공합니다. 
⑦ 모든 팀원은 프로젝트 문서화에 기여합니다. 
⑧ 질문이나 의견은 언제나 환영하며, 빠르게 공유하는 것을 원칙으로 합니다. 
⑨ 작업 분배는 능력과 경험을 고려하여 공정하게 이루어집니다. 
⑩ 충돌이나 문제가 발생할 경우, 팀원 전체의 의견을 수렴하여 해결합니다.-코드 작성 규칙

### 코드 작성 규칙
① 모듈 이름은 명사로 합니다. 
② 변수명은 카멜케이스를 사용합니다. 
③ ENV 변수는 메서드 | 함수 내에 작성하지 않습니다. 
④ if문은 가능하면 {}로 묶습니다. 
⑤ 배열 보다는 명시적으로 변수 두 개를 사용하는 것이 좋습니다. 
⑥ 가능한 Promise를 반환하는 것들은 모두 await를 붙입니다. 
⑦ 예외 처리 시 던져주는 message는 배열로 반환합니다. 
⑧ 코멘트는 해당 코드의 목적과 로직을 명확하게 전달할 수 있도록 작성합니다. 
⑨ 재사용 가능한 코드는 가능한 함수나 모듈로 분리합니다.
