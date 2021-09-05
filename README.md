# laravue-docker-demo
## 起動
- php + vue, postgres のコンテナ起動
    ```
    $ docker-compose up -d
    ```
- vue 起動
    - php コンテナに入る
        ```
        $ docker exec -it php bash
        ```
    - 起動（ホットリロード有効）
        ```
        $ yarn hot
        ```
- 表示確認
    - http://localhost:8080/