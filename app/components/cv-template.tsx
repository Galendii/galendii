// components/CvTemplate.tsx
import React from 'react';
import clsx from 'clsx';
import {
  Profile,
  SkillCategory,
  Project,
  Experience,
} from '@/types';

interface CvTemplateProps {
  profile: Profile;
  skillCategories: SkillCategory[];
  // projects: Project[];
  experiences: Experience[];
  innerRef: React.RefObject<HTMLDivElement>;
  mode?: 'preview' | 'pdf';
}

// Define styles for preview (uses theme colors)
const previewStyles = {
  h1: 'text-4xl', h2: 'text-2xl', h3: 'text-xl', h4: 'text-lg',
  p: 'text-sm', xs: 'text-xs', link: 'text-sm', tag: 'text-xs',
  skillCategoryTitle: 'text-md', skillItem: 'text-sm',
  containerPadding: 'p-6 sm:p-8', headerMarginBottom: 'mb-8', headerPaddingBottom: 'pb-4',
  headerGap: 'gap-6', avatarSize: 'w-24 h-24', sectionGap: 'gap-x-8 gap-y-6',
  columnSpacing: 'space-y-8', headingMarginBottom: 'mb-3', headingPaddingBottom: 'pb-1',
  listSpacing: 'space-y-1', itemMarginBottom: 'mb-1', tagPadding: 'px-2',
  linkSpacing: 'space-x-3',
  // Theme colors for preview
  bgColor: 'bg-background', textColor: 'text-foreground', mutedTextColor: 'text-muted-foreground',
  primaryColor: 'text-primary', borderColor: 'border-border', mutedBgColor: 'bg-muted',
  shadow: 'shadow-lg',
};

// Define styles for PDF (uses HARDCODED light theme colors and compact layout)
const pdfStyles = {
  h1: 'text-3xl', h2: 'text-xl', h3: 'text-lg', h4: 'text-base',
  p: 'text-[10px] leading-snug', xs: 'text-[9px]', link: 'text-[10px]', tag: 'text-[9px]',
  skillCategoryTitle: 'text-sm', skillItem: 'text-[10px]',
  containerPadding: 'p-4', headerMarginBottom: 'mb-3', headerPaddingBottom: 'pb-2',
  headerGap: 'gap-3', avatarSize: 'w-16 h-16', sectionGap: 'gap-x-4 gap-y-3',
  columnSpacing: 'space-y-3', headingMarginBottom: 'mb-1', headingPaddingBottom: 'pb-0.5',
  listSpacing: 'space-y-0', itemMarginBottom: 'mb-0.5', tagPadding: 'px-1',
  linkSpacing: 'space-x-1.5',
  // --- Explicit Light Theme Colors for PDF ---
  bgColor: 'bg-white', // Force white background
  textColor: 'text-black', // Force black main text
  mutedTextColor: 'text-gray-600', // Use a specific gray for muted text
  primaryColor: 'text-blue-600', // Use a specific blue for primary accents
  borderColor: 'border-gray-300', // Use a specific gray for borders
  mutedBgColor: 'bg-gray-100', // Use a specific light gray for muted backgrounds
  shadow: 'shadow-none', // No shadow for PDF
};


const CvTemplate: React.FC<CvTemplateProps> = ({
  profile,
  skillCategories,
  // projects, // Prop received but section commented out
  experiences,
  innerRef,
  mode = 'preview',
}) => {
  // Select style set based on mode
  const styles = mode === 'pdf' ? pdfStyles : previewStyles;

  const formatUrlForDisplay = (url: string) => {
    try {
        const parsed = new URL(url);
        return `${parsed.hostname}${parsed.pathname}${parsed.search}${parsed.hash}`.replace(/\/$/, ''); // Remove trailing slash
    } catch {
        return url; // Return original if parsing fails
    }
};

  return (
    // Apply conditional styles including background/text colors
    <div
      ref={innerRef}
    
    >
      {/* Header Section */}
      <header className={clsx('flex flex-col sm:flex-row items-center border-b', styles.borderColor, styles.headerMarginBottom, styles.headerPaddingBottom, styles.headerGap)}>
        {profile.avatar && (
          <img
            src={profile.avatar}
            alt={`${profile.name}'s Avatar`}
            className={clsx(styles.avatarSize, 'rounded-full border-2', styles.borderColor, 'flex-shrink-0')}
          />
        )}
        <div className="text-center sm:text-left">
           {/* Use textColor for main headings, primaryColor for title, mutedTextColor for description */}
          <h1 className={clsx(styles.h1, 'font-bold', styles.textColor)}>{profile.name}</h1>
          <h2 className={clsx(styles.h2, 'font-light', styles.primaryColor)}>{profile.title}</h2>
       
          <div className={clsx('flex justify-center sm:justify-start mt-2', styles.linkSpacing, styles.link)}>
          {profile.socialLinks.email && (
                 <a href={`mailto:${profile.socialLinks.email}`} className={clsx(styles.primaryColor, 'hover:underline')}>
                     {profile.socialLinks.email} {/* Show full email */}
                 </a>
             )}
             {/* LinkedIn: Show text and URL */}
             {profile.socialLinks.linkedin && (
                 <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={clsx(styles.primaryColor, 'hover:underline')}>
                    {mode === 'preview' ? "LinkedIn" : formatUrlForDisplay(profile.socialLinks.linkedin)}
                 </a>
             )}
             {/* GitHub: Show text and URL */}
             {profile.socialLinks.github && (
                  <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" className={clsx(styles.primaryColor, 'hover:underline')}>
                    {formatUrlForDisplay(profile.socialLinks.github)}
                 </a>
             )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className={clsx('grid grid-cols-1 md:grid-cols-3', styles.sectionGap)}>

        {/* Left Column */}
        <div className={clsx('md:col-span-2', styles.columnSpacing)}>
          {/* Summary Section */}
          <section>
             {/* Use textColor for heading, mutedTextColor for paragraph */}
            <h3 className={clsx(styles.h3, 'font-semibold border-b text-foreground', styles.borderColor, styles.headingMarginBottom, styles.headingPaddingBottom, styles.primaryColor)}>Summary </h3>
            <p className={clsx(styles.p, styles.mutedTextColor, 'leading-snug')}>{profile.summary}</p>
          </section>

          {/* Experience Section */}
          <section>
             {/* Use textColor, primaryColor, mutedTextColor appropriately */}
            <h3 className={clsx(styles.h3, 'font-semibold border-b text-foreground mb-1.5', styles.borderColor, styles.headingPaddingBottom, styles.primaryColor)}>Experience</h3>
            <div className={clsx(mode === 'pdf' ? 'space-y-2.5' : 'space-y-5')}>
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <h4 className={clsx(styles.h4, 'font-semibold', styles.textColor)}>{exp.role}</h4>
                  <p className={clsx(styles.p, 'font-medium', styles.primaryColor)}>
                    {exp.company}
                    <span className={clsx(styles.xs, styles.mutedTextColor, 'font-normal')}> | {exp.location}</span>
                  </p>
                  <p className={clsx(styles.xs, styles.mutedTextColor, styles.itemMarginBottom)}>{exp.period}</p>
                  <p className={clsx(styles.p, styles.mutedTextColor, styles.itemMarginBottom)}>{exp.description}</p>
                  <ul className={clsx('list-disc list-inside pl-4', styles.listSpacing, styles.p, styles.mutedTextColor)}>
                    {exp.achievements.map((ach, index) => ( <li key={index}>{ach}</li> ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section - COMMENTED OUT */}
          {/* <section> ... </section> */}
        </div>

        {/* Right Column (Sidebar) */}
        <div className={clsx('md:col-span-1', styles.columnSpacing)}>
          {/* Skills Section */}
          <section>
             <h3 className={clsx(styles.h3, 'font-semibold border-b border-border text-foreground mb-2', styles.headingPaddingBottom,styles.primaryColor, styles.borderColor)}>Skills</h3>
            {skillCategories.map((category) => (
              <div key={category.name} className="mb-4 last:mb-0">
                <h4 className={clsx(styles.skillCategoryTitle, 'font-semibold text-foreground mb-2 ',styles.textColor)}>{category.name}</h4>
                <div className={clsx('flex flex-wrap', mode === 'pdf' ? 'gap-0.5' : 'gap-2')}>
                  {category.skills.map((skill) => (
                    <p
                      key={skill.id}
                      // Remove text-center, add flex centering instead
                      className={clsx('  py-0.5  flex items-center justify-center p-2 font-medium text-sm', styles.p, styles.mutedTextColor)}
                    >
                      {skill.name}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Education Section - COMMENTED OUT */}
          {/* <section> ... </section> */}
          {/* Languages Section (Optional Placeholder) - COMMENTED OUT */}
          {/* <section> ... </section> */}
        </div>
      </div>
    </div>
  );
};

export default CvTemplate;