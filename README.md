# weather-of-seattle

## Project setup and run
```
git clone https://github.com/kimkyeseung/weather-of-seattle.git
npm install
npm run serve
```

## 진행시간
약 6시 30분부터 약 9시 30분까지 진행하였습니다.

## 진행하면서
메인컴포넌트가 로드되면 Store에 location, cloud, weather 데이터를 저장하고 서브 컴포넌트인 테이블 컴포넌트에서 스토어에 접근하여 화면을 구성하려는 방식으로 계획하였으나 테이블 컴포넌트의 재사용성을 높이기 위하여 메인컴포넌트에서 테이블 컴포넌트로 데이터를 편집하여 prop으로 전달하였습니다.
[날씨코드](https://www.aerisweather.com/support/docs/api/reference/weather-codes/)를 가져와 직접 입력하여 약자로 받은 데이터를 원래 뜻으로 풀어서 볼 수 있도록하였습니다. *(eg: NM => 'Numerous')*
3시간 정도 사용하였지만 다른 스케줄로 인해 실제 추가 작업시간은 2시간 정도 소요하였고 타입스크립트를 통한 디테일한 타입 선언 및 스타일 작업은 생략하게 되었습니다. 말씀드렸던 시간보다 늦었지만 잘 헤아려 봐주시면 감사하겠습니다.