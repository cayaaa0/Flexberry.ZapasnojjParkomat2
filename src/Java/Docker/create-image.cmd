docker build --no-cache -f SQL\Dockerfile.PostgreSql -t zapasnojj_parkomat2-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t zapasnojj_parkomat2-java/app ../../..
