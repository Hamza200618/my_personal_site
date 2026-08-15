import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout/MainLayout';
import { PageFallback } from '@/components/layout/PageFallback/PageFallback';

// Lazy-loaded pages — code splitting for performance.
const Home = lazy(() => import('@/pages/Home/Home').then((m) => ({ default: m.Home })));
const Products = lazy(() => import('@/pages/Products/Products').then((m) => ({ default: m.Products })));
const CaseStudies = lazy(() => import('@/pages/CaseStudies/CaseStudies').then((m) => ({ default: m.CaseStudies })));
const Services = lazy(() => import('@/pages/Services/Services').then((m) => ({ default: m.Services })));
const Resume = lazy(() => import('@/pages/Resume/Resume').then((m) => ({ default: m.Resume })));
const Contact = lazy(() => import('@/pages/Contact/Contact').then((m) => ({ default: m.ContactPage })));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound').then((m) => ({ default: m.NotFound })));
const ExamMate = lazy(() => import('@/pages/ExamMate/ExamMate').then((m) => ({ default: m.ExamMate })));

/**
 * App router — lazy-loaded routes wrapped in the global layout.
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageFallback />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'products',
        element: (
          <Suspense fallback={<PageFallback />}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: 'case-studies',
        element: (
          <Suspense fallback={<PageFallback />}>
            <CaseStudies />
          </Suspense>
        ),
      },
      {
        path: 'services',
        element: (
          <Suspense fallback={<PageFallback />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: 'resume',
        element: (
          <Suspense fallback={<PageFallback />}>
            <Resume />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<PageFallback />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: 'products/exammate-ai',
        element: (
          <Suspense fallback={<PageFallback />}>
            <ExamMate />
          </Suspense>
        ),
      },
      {
        path: '404',
        element: (
          <Suspense fallback={<PageFallback />}>
            <NotFound />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: <Navigate to="/404" replace />,
      },
    ],
  },
]);