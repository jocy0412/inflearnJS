var urlBase = "http://item.gmarket.co.kr/detailview/Item.asp?goodscode=";
var scriptBase = "javascript:CommonApplyEventPlatformGmarket";
var rppBase = "http://rpp.gmarket.co.kr/?exhib=";

$(document).ready(function(){
	//welcome
	$(".box__item-welcome .list-item").eq(0).find("a").attr("href" , urlBase+"2136897499").find('img').attr({"alt": "크리넥스 데코앤소프트 화장지 30m 24롤 2팩"});
	$(".box__item-welcome .list-item").eq(1).find("a").attr("href" , urlBase+"2133211798").find('img').attr({"alt": "hp A4 복사용지 80g 2500매"});
	$(".box__item-welcome .list-item").eq(2).find("a").attr("href" , urlBase+"2134016753").find('img').attr({"alt": "스카트 물티슈 캡 70매 20+1개"});
	$(".box__item-welcome .list-item").eq(3).find("a").attr("href" , urlBase+"2134961500").find('img').attr({"alt": "런천미트 200g 10개"});

	// 1주차
	$(".box__week1 .box__item-half .list-item").eq(0).find("a").attr("href", urlBase+"2133425722").find('img').attr({"alt": "나랑드사이다 180ml 30캔"});
	$(".box__week1 .box__item-half .list-item").eq(1).find("a").attr("href", urlBase+"1928172559").find('img').attr({"alt": "피존 3100ml 3개 + 300ml 증정"});
	$(".box__week1 .box__item-half .list-item").eq(2).find("a").attr("href", urlBase+"1502673919").find('img').attr({"alt": "반만쓰는 리큐 1.7L 3개"});
	$(".box__week1 .box__item-half .list-item").eq(3).find("a").attr("href", urlBase+"2137916266").find('img').attr({"alt": "크런키 크리미 초코바(밀크) 44g 12개"});
	$(".box__week1 .box__item-half .list-item").eq(4).find("a").attr("href", urlBase+"2086095731").find('img').attr({"alt": "아토세이프 베이킹소다 냉장고 탈취제 500g 5개"});
	$(".box__week1 .box__item-half .list-item").eq(5).find("a").attr("href", urlBase+"2135784706").find('img').attr({"alt": "코디 비더앤클린 물티슈 46매 10팩"});
	$(".box__week1 .box__item-half .list-item").eq(6).find("a").attr("href", urlBase+"2137557667").find('img').attr({"alt": "아이시스 8.0 200펫 40입"});
	$(".box__week1 .box__item-half .list-item").eq(7).find("a").attr("href", urlBase+"2136079340").find('img').attr({"alt": "부드러운 모카 110T + 종이컵 증정"});

	$(".box__week1 .box__item-bulk .list-item").eq(0).find("a").attr("href", urlBase+"1586854594").find('img').attr({"alt": "아토세이프 습기제거제 520ml 24개입"});
	$(".box__week1 .box__item-bulk .list-item").eq(1).find("a").attr("href", urlBase+"2085147861").find('img').attr({"alt": "유한킴벌리 두루마리 화장지 3겹 25M 30롤 3팩"});
	$(".box__week1 .box__item-bulk .list-item").eq(2).find("a").attr("href", urlBase+"2095712915").find('img').attr({"alt": "피죤 리치퍼퓸 6L + 비비락 증정"});
	$(".box__week1 .box__item-bulk .list-item").eq(3).find("a").attr("href", urlBase+"2133826593").find('img').attr({"alt": "담터평중 콘푸레이크 현미 천마차 100T 4개"});
	$(".box__week1 .box__item-bulk .list-item").eq(4).find("a").attr("href", urlBase+"2135924343").find('img').attr({"alt": "스파이시 킬바사 400g 12개"});
	$(".box__week1 .box__item-bulk .list-item").eq(5).find("a").attr("href", urlBase+"2136655128 ").find('img').attr({"alt": "스파클생수 500ml 200병"});
	$(".box__week1 .box__item-bulk .list-item").eq(6).find("a").attr("href", urlBase+"2133430167").find('img').attr({"alt": "칸타타 아이스 블랙 230ml 50팩"});
	$(".box__week1 .box__item-bulk .list-item").eq(7).find("a").attr("href", urlBase+"1794023121").find('img').attr({"alt": "뷰코셋 바이오 생리대 롱윙 10입 12개"});

	$(".box__week1 .box__item-event .list-item").eq(0).find("a").attr("href", urlBase+"2084236849").find('img').attr({"alt": "원데이 행주 30매+수세미 30매+머그컵 증정"});

	// 2주차
	$(".box__week2 .box__item-half .list-item").eq(0).find("a").attr("href", urlBase+"2050112544").find('img').attr({"alt": "적재적소 뽑아쓰는 키친타올 100매 9개"});
	$(".box__week2 .box__item-half .list-item").eq(1).find("a").attr("href", urlBase+"1860055502").find('img').attr({"alt": "포스트잇 노트 450매"});
	$(".box__week2 .box__item-half .list-item").eq(2).find("a").attr("href", urlBase+"2134893240").find('img').attr({"alt": "스카트 빨아쓰는 행주타올 36매 2롤 4팩"});
	$(".box__week2 .box__item-half .list-item").eq(3).find("a").attr("href", urlBase+"2135071811").find('img').attr({"alt": "허브갈릭포크 10개"});
	$(".box__week2 .box__item-half .list-item").eq(4).find("a").attr("href", urlBase+"2134015457").find('img').attr({"alt": "케라시스 대용량 샹품 4L + 펌프"});
	$(".box__week2 .box__item-half .list-item").eq(5).find("a").attr("href", urlBase+"2133821918").find('img').attr({"alt": "맥심 부드러운 블랙 모카골드 100T"});
	$(".box__week2 .box__item-half .list-item").eq(6).find("a").attr("href", urlBase+"2136049488").find('img').attr({"alt": "에이스 오리지널 280ml 12개입"});
	$(".box__week2 .box__item-half .list-item").eq(7).find("a").attr("href", urlBase+"1928343018").find('img').attr({"alt": "아토세이프 물팽이 습기제거제 520ml 20개"});

	$(".box__week2 .box__item-bulk .list-item").eq(0).find("a").attr("href", urlBase+"2134024097").find('img').attr({"alt": "액츠 프리미엄 젤 2.7L 3개 + 1L 3개"});
	$(".box__week2 .box__item-bulk .list-item").eq(1).find("a").attr("href", urlBase+"2134028093").find('img').attr({"alt": "랩신 핸드워시 센서티브 250ml 8개"});
	$(".box__week2 .box__item-bulk .list-item").eq(2).find("a").attr("href", urlBase+"2133824441").find('img').attr({"alt": "카누 미니 마일드 120T 4개 총 480T"});
	$(".box__week2 .box__item-bulk .list-item").eq(3).find("a").attr("href", urlBase+"2139534621").find('img').attr({"alt": "청정원 호밍스 볶음밥 210g 5종 20개"});
	$(".box__week2 .box__item-bulk .list-item").eq(4).find("a").attr("href", urlBase+"2135942188").find('img').attr({"alt": "짜짜로니 140g 40개입"});
	$(".box__week2 .box__item-bulk .list-item").eq(5).find("a").attr("href", urlBase+"2135917095").find('img').attr({"alt": "배즙숙성숯불구이맛후랑크 30개"});
	$(".box__week2 .box__item-bulk .list-item").eq(6).find("a").attr("href", urlBase+"1778070139").find('img').attr({"alt": "와이프올 다닦아 타올 50매"});
	$(".box__week2 .box__item-bulk .list-item").eq(7).find("a").attr("href", urlBase+"2137780689").find('img').attr({"alt": "아토세이프 락스 2L 6개"});

	$(".box__week2 .box__item-event .list-item").eq(0).find("a").attr("href", urlBase+"2103963991").find('img').attr({"alt": "에어셀 천연펄프 두루마리 화장지 프리미엄 45m 72롤"});

	// 3주차
	$(".box__week3 .box__item-half .list-item").eq(0).find("a").attr("href", urlBase+"2133641839").find('img').attr({"alt": "신흥 박스테이프 40M 10개"});
	$(".box__week3 .box__item-half .list-item").eq(1).find("a").attr("href", urlBase+"1663041022").find('img').attr({"alt": "무균무때 500ml 4종 + 욕실용 리필 500ml 증정"});
	$(".box__week3 .box__item-half .list-item").eq(2).find("a").attr("href", urlBase+"2050122058").find('img').attr({"alt": "적재적소 하루한장 일회용 수세미 60매 4개"});
	$(".box__week3 .box__item-half .list-item").eq(3).find("a").attr("href", urlBase+"2000572777").find('img').attr({"alt": "육개장 12개"});
	$(".box__week3 .box__item-half .list-item").eq(4).find("a").attr("href", urlBase+"1984481017").find('img').attr({"alt": "피죤 시그니처 1600ml 3개 + 1개 더"});
	$(".box__week3 .box__item-half .list-item").eq(5).find("a").attr("href", urlBase+"2130372507").find('img').attr({"alt": "아이러브베베 피치 100매 15팩 캡형"});
	$(".box__week3 .box__item-half .list-item").eq(6).find("a").attr("href", urlBase+"2139532805").find('img').attr({"alt": "청정원 싱글파우치 까르보나라 150g 8개"});
	$(".box__week3 .box__item-half .list-item").eq(7).find("a").attr("href", urlBase+"2133423753").find('img').attr({"alt": "비락식혜 175ml 30캔"});

	$(".box__week3 .box__item-bulk .list-item").eq(0).find("a").attr("href", urlBase+"1734599813").find('img').attr({"alt": "크리넥스 에어셀 점보롤 스탠다드 140m 12롤"});
	$(".box__week3 .box__item-bulk .list-item").eq(1).find("a").attr("href", urlBase+"1782912499").find('img').attr({"alt": "아토세이프 곰팡이제거제 400ml 4개"});
	$(".box__week3 .box__item-bulk .list-item").eq(2).find("a").attr("href", urlBase+"1502726232").find('img').attr({"alt": "샤워메이트 바디워시 4L 4개 + 펌프"});
	$(".box__week3 .box__item-bulk .list-item").eq(3).find("a").attr("href", urlBase+"2136099353").find('img').attr({"alt": "수피리모 오리지널 330T"});
	$(".box__week3 .box__item-bulk .list-item").eq(4).find("a").attr("href", urlBase+"2133429670").find('img').attr({"alt": "칸타타 카라멜마끼아또 아이스 230ml 50팩"});
	$(".box__week3 .box__item-bulk .list-item").eq(5).find("a").attr("href", urlBase+"2085938768").find('img').attr({"alt": "통 쥐포구이 30개"});
	$(".box__week3 .box__item-bulk .list-item").eq(6).find("a").attr("href", urlBase+"1680610016").find('img').attr({"alt": "퓨어 주방세제 1000ml 10개"});
	$(".box__week3 .box__item-bulk .list-item").eq(7).find("a").attr("href", urlBase+"2134026673").find('img').attr({"alt": "랩신 토탈핸드워시 리필 200ml 18개"});

	$(".box__week3 .box__item-event .list-item").eq(0).find("a").attr("href", urlBase+"1925173003").find('img').attr({"alt": "크리넥스 럭셔리 폼 거품 비누 핸드워시 300ml 2개"});

	// 4주차
	$(".box__week4 .box__item-half .list-item").eq(0).find("a").attr("href", urlBase+"2119315813").find('img').attr({"alt": "복숭아 아이스티 70T + 과일퐁당 텀블러"});
	$(".box__week4 .box__item-half .list-item").eq(1).find("a").attr("href", urlBase+"2135049555").find('img').attr({"alt": "맛있는 핫도그 500g 20개입"});
	$(".box__week4 .box__item-half .list-item").eq(2).find("a").attr("href", urlBase+"2050114222").find('img').attr({"alt": "적재적소 뽑아쓰는 미용티슈 200매 9개"});
	$(".box__week4 .box__item-half .list-item").eq(3).find("a").attr("href", urlBase+"1896047470").find('img').attr({"alt": "액츠 퍼펙트 2.2L 3개 + 300ml 증정"});
	$(".box__week4 .box__item-half .list-item").eq(4).find("a").attr("href", urlBase+"2134009477").find('img').attr({"alt": "르샤트라 드라이시트 40매 3개"});
	$(".box__week4 .box__item-half .list-item").eq(5).find("a").attr("href", urlBase+"2133867497").find('img').attr({"alt": "동서 현미녹차 100T 2팩"});
	$(".box__week4 .box__item-half .list-item").eq(6).find("a").attr("href", urlBase+"2137557667").find('img').attr({"alt": "맛밤 80g 6개"});
	$(".box__week4 .box__item-half .list-item").eq(7).find("a").attr("href", urlBase+"2085907143").find('img').attr({"alt": "크리넥스 순수 3겹 화장지 27m 24롤 1팩"});

	$(".box__week4 .box__item-bulk .list-item").eq(0).find("a").attr("href", urlBase+"2090285814").find('img').attr({"alt": "건조기용 피죤 120매 3개"});
	$(".box__week4 .box__item-bulk .list-item").eq(1).find("a").attr("href", urlBase+"2095708887").find('img').attr({"alt": "액츠 파워젤 2.0L 12개 + 1L 2개"});
	$(".box__week4 .box__item-bulk .list-item").eq(2).find("a").attr("href", urlBase+"2136565244").find('img').attr({"alt": "수프리모 스위트 아메리카노 300T"});
	$(".box__week4 .box__item-bulk .list-item").eq(3).find("a").attr("href", urlBase+"2136583146").find('img').attr({"alt": "베베숲 프리미어 70매 캡 20팩"});
	$(".box__week4 .box__item-bulk .list-item").eq(4).find("a").attr("href", urlBase+"2135938647").find('img').attr({"alt": "삼양라면 120g 40개입"});
	$(".box__week4 .box__item-bulk .list-item").eq(5).find("a").attr("href", urlBase+"2133431408").find('img').attr({"alt": "카페베네 오미자에이드 190ml 50팩"});
	$(".box__week4 .box__item-bulk .list-item").eq(6).find("a").attr("href", urlBase+"1946952023").find('img').attr({"alt": "아토세이프 덴티본조르노 미니치약 세트 5종"});
	$(".box__week4 .box__item-bulk .list-item").eq(7).find("a").attr("href", urlBase+"1885319931").find('img').attr({"alt": "소프트 폼 솝 스윗파우더향 1.95L 4개"});

	$(".box__week4 .box__item-event .list-item").eq(0).find("a").attr("href", urlBase+"2115806313").find('img').attr({"alt": "스카트 천연펄프 친환경 에코 종이 물티슈 70매 24개"});


	// 스마일클럽 비즈 이벤트 상품영역
	$(".box__item-event .list-item").eq(1).find("a").attr("href", rppBase+"46706").find('img').attr({"alt": "야놀자 국매 숙박 5만원 부터"});

	$(".box__item-event .box__buttons").eq(0).find("a").attr("href", "http://promotion.gmarket.co.kr/planview/plan.asp?sid=166967");
	$(".box__item-event .box__buttons").eq(1).find("a").attr("href", rppBase+"46706");

	// 대용량 상품 전체보기
	$(".box__item-bulk .box__buttons").find("a").attr("href", rppBase+"46705");

	// experience
	$(".box__experience .list-item").eq(0).find("a").attr("href", rppBase+"44697");
	$(".box__experience .list-item").eq(1).find("a").attr("href", rppBase+"46706");

	/* monthly-coupon : go */
	// smiledelivery
	$(".box__coupon--smiledelivery .link__go").eq(0).attr({"href": "http://corners.gmarket.co.kr/smiledelivery"});
	$(".box__coupon--smiledelivery .link__go").eq(1).attr({"href": rppBase+"35329"});

	// mart
	$(".box__coupon--mart .link__go").eq(0).attr({"href": "http://corners.gmarket.co.kr/ExpressShop"});

	// delivery
	$(".box__coupon--delivery .link__go").eq(0).attr({"href": rppBase+"32233"});

	// book
	$(".box__coupon--book .link__go").eq(0).attr({"href": rppBase+"33114"});

	// trip
	$(".box__coupon--trip .link__go").eq(0).attr({"href": rppBase+"42598#air"});
	$(".box__coupon--trip .link__go").eq(1).attr({"href": "http://m.gmarket.co.kr/?sectionSeq=11&pageTypeSeq=10"});

	/* g9-coupon */
	$(".box__coupon--g9 .link__go").eq(0).attr({"href": "http://www.g9.co.kr/Member/CustomerService/AllLogin?redirectUrl=http%3a%2f%2fwww.g9.co.kr%2fMember%2fMyPage%3fpopup%3dG9Coupon"});
});
