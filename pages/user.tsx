import Link from "next/link"

const UserRegister = () => (
  <>
    <Link href="/">トップへ戻る</Link>

    <h1>ログイン</h1>

    <form action="http://localhost:3000/api/user/login" method="POST">
      メールアドレス : <input type="text" name="email" /> <br />
      パスワード : <input type="password" name="password" /> <br />
      <button type="submit">登録</button>
    </form>

    <h1>ユーザー登録</h1>

    <form action="http://localhost:3000/api/user/register" method="POST">
      名前 : <input type="text" name="name" /> <br />
      メールアドレス : <input type="text" name="email" /> <br />
      パスワード : <input type="password" name="password" /> <br />
      <button type="submit">登録</button>
    </form>
  </>
)

export default UserRegister
