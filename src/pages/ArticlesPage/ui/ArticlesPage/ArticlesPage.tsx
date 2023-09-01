import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Article, ArticleList, ArticleView } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import cls from './ArticlesPage.module.scss';
import { articlePageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

interface ArticlesPageProps {
    className?: string
}

const article = {
    id: '1',
    title: 'Javascript',
    subtitle: 'Что нового в JS за 2023 год',
    img: 'https://rockcontent.com/br/wp-content/uploads/sites/2/2020/04/Javascript-1024x750.png.webp',
    views: 1022,
    createdAt: '26.02.2022',
    type: [
        ArticleType.IT,
    ],
    user: {
        id: '1',
        username: 'alex',
        avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/04/prikolnaya-kartinka-dlya-avatarki.jpg',
    },
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                '«Hello, world!» — программа, результатом работы которой является вывод'
                + ' на экран или иное устройство фразы «Hello, world!» (в дословном переводе с '
                + 'английского — «Здравствуй, мир!»; представляет собой распространённое неформальное'
                + ' приветствие, близкое к русскому «всем привет!»). Также используются вариации с другой '
                + 'пунктуацией или регистром — например, «Hello World». Обычно это первый пример '
                + 'программы в учебниках по программированию, и для многих студентов такая программа '
                + 'является первым опытом при изучении нового языка.',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: 'const ArticlesPage = ({ className }: ArticlesPageProps) => {\n  '
                + "  const { t } = useTranslation('article');\n    return (\n       "
                + ' <div className={classNames(cls.ArticlesPage, {}, [className])}>\n      '
                + "      {t('ArticlesPage')}\n        </div>\n    );\n};",
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                '«Hello, world!» — программа, результатом работы которой является вывод на'
                + ' экран или иное устройство фразы «Hello, world!» (в дословном переводе с английского'
                + ' — «Здравствуй, мир!»; представляет собой распространённое неформальное'
                + ' приветствие, близкое к русскому «всем привет!»). Также используются вариации с'
                + ' другой пунктуацией или регистром — например, «Hello World». Обычно это первый'
                + ' пример программы в учебниках по программированию, и для многих студентов такая '
                + 'программа является первым опытом при изучении нового языка.',
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.IMAGE,
            title: 'Заголовок этого блока',
            src: 'https://cdn-icons-png.flaticon.com/512/5683/5683661.png',
        },
        {
            id: '3',
            type: ArticleBlockType.CODE,
            code: "const fs = require('fs');\nconst jsonServer = require"
                + "('json-server');\nconst path "
                + "= require('path');\n\nconst server = jsonServer.create();\n\nconst router = "
                + "jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer."
                + 'defaults({}));\nserver.use(jsonServer.bodyParser);',
        },
    ],
};

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
    });
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticleList
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
