import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { generateBreadcrumbs } from '../../lib/navigation';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const crumbs = generateBreadcrumbs(location.pathname);

  if (crumbs.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ol className="flex items-center space-x-1.5 text-xs text-[#777780]">
        {crumbs.map((crumb, idx) => {
          const isLast = idx === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center space-x-1.5">
              {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-[#777780]" />}
              {isLast ? (
                <span className="font-semibold text-[#141414] truncate max-w-[200px]" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link to={crumb.href} className="hover:text-[#141414] transition-colors truncate">
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
