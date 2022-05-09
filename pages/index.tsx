import type { NextPage } from "next"

const Home: NextPage = () => (
  <>
    <section>
      <h1>Item登録</h1>
      <form action="http://localhost:3000/api/item/create" method="POST">
        タイトル : <input type="text" name="title" /> <br />
        画像 : <input type="text" name="image" /> <br />
        価格 : <input type="text" name="price" /> <br />
        説明 : <input type="text" name="description" /> <br />
        メールアドレス : <input type="text" name="email" /> <br />
        <button type="submit">登録</button>
      </form>

    </section>
  </>
)

export default Home
