/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { FeatureDetailPage } from './pages/FeatureDetailPage';
import { PricingPage } from './pages/PricingPage';
import { EnterprisePage } from './pages/EnterprisePage';
import { DemoPage } from './pages/DemoPage';
import { ContactSalesPage } from './pages/ContactSalesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { SecurityPage } from './pages/SecurityPage';
import { IntegrationsPage } from './pages/IntegrationsPage';
import { TemplatesPage } from './pages/TemplatesPage';
import { ChangelogPage } from './pages/ChangelogPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { BlogPage } from './pages/BlogPage';
import { GuidesPage } from './pages/GuidesPage';
import { CustomerStoriesPage } from './pages/CustomerStoriesPage';
import { WebinarsPage } from './pages/WebinarsPage';
import { HelpPage } from './pages/HelpPage';
import { ComparePage } from './pages/ComparePage';
import { AiPage } from './pages/AiPage';
import { SolutionDetailPage } from './pages/SolutionDetailPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/features/:slug" element={<FeatureDetailPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/enterprise" element={<EnterprisePage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/contact-sales" element={<ContactSalesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />

          {/* Parro AI Suite */}
          <Route path="/ai" element={<AiPage />} />
          <Route path="/ai/:slug" element={<AiPage />} />

          {/* Solutions by Team & Industry */}
          <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
          <Route path="/industries/:slug" element={<SolutionDetailPage />} />

          {/* Resources Hub */}
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/customer-stories" element={<CustomerStoriesPage />} />
          <Route path="/webinars" element={<WebinarsPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/compare" element={<ComparePage />} />

          {/* Legal & Governance */}
          <Route path="/privacy" element={<LegalPage />} />
          <Route path="/terms" element={<LegalPage />} />
          <Route path="/cookies" element={<LegalPage />} />
          <Route path="/faq" element={<LegalPage />} />

          {/* 404 Catch-All */}
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
