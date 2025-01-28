// id에 따라 다양한 페이지를 만들고싶으면 기억해 [] 다이나믹라우트
import { DUMMY_NEWS } from "../../../dummy-news";

export default function NewsDetailPage({ params /*현재 접속한 id를 알고싶을때 */}) {
    const newsSlug = params.slug;
    const news = DUMMY_NEWS.find( news => news.slug === newsSlug );

    return (
        <article>
            <header>
                <img src={`/images/news/${news.image}`}  alt={news.title} width={300} height={200} />
                <h1>{news.title}</h1>
                <time dateTime={news.date}>{news.date}</time>

            </header>
            <p>{news.content}</p>

        </article>
    )
}