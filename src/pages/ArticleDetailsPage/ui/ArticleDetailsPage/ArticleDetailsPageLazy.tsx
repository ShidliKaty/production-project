import { lazy } from 'react';

export const ArticleDetailsPageLazy = lazy(() => import('./ArticleDetailsPage'));

// export const ArticleDetailsPageLazy = lazy(() => new Promise((resolve) => {
//     // @ts-ignore
//     // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
//     setTimeout(() => resolve(import('./ArticleDetailsPage')), 400);
// }));
