기본 파일 설명

- main.py: FastAPI 앱 실행 시 진입점 (uvicorn app.main:app --reload)

- config.py: .env에서 DB 접속정보 등을 불러오는 설정 모듈

- connection.py: oracledb.connect()로 DB 커넥션 생성 함수

- user.py: 회원가입, 로그인 라우터 & 스키마 & 서비스 각각 분리

- schemas/: FastAPI의 요청/응답 검증용 Pydantic 모델

- models/: ORM 모델이 아니라, 필요하면 raw SQL 또는 SQLAlchemy 정의 가능

- services/: 실제 로직 처리 (예: 비밀번호 해싱, 유저 DB 저장)
