// components/CvExportButton.tsx
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button'; // Assuming shadcn/ui setup
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger, // We might trigger manually
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Download, Eye, FileDown } from 'lucide-react'; // Example icons

import CvTemplate from './cv-template';
import { Experience, Profile, Project, SkillCategory } from '@/types';


interface CvExportButtonProps {
  profile: Profile;
  skillCategories: SkillCategory[];
  // projects: Project[];
  experiences: Experience[];
}

export const CvExportButton: React.FC<CvExportButtonProps> = ({
  profile,
  skillCategories,
  // projects,
  experiences,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cvPreviewRef = useRef<HTMLDivElement>(null); // Ref for the CV content inside the modal
  const cvPdfRef = useRef<HTMLDivElement>(null);
  // PDF Export Logic (remains mostly the same)
  const handleExportPdf = async () => {
    // Ensure the ref points to the CV content *rendered inside the modal*
    const elementToExport = cvPdfRef.current;

    if (!elementToExport) {
      console.error("CV preview element ref is not set.");
      alert("Could not export CV. Preview element not found.");
      return;
    }


    try {
      // @ts-ignore: html2pdf.js doesn't have type definitions
      const html2pdf = (await import('html2pdf.js')).default;
      const options = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: `${profile.name.replace(/\s+/g, '_')}_CV_${new Date().getFullYear()}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };

      await html2pdf().from(elementToExport).set(options).save();



    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("An error occurred while generating the PDF.");
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);




  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger    asChild>
          <Button variant="default" size="lg">
             <FileDown className="mr-2 h-4 w-4" /> Export CV
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={openModal}>
            <Eye className="mr-2 h-4 w-4" /> Preview
          </DropdownMenuItem>
          <DropdownMenuItem onClick={()=>handleExportPdf()}>
            <Download className="mr-2 h-4 w-4" /> Download as PDF
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Dialog component for the modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        {/* No DialogTrigger needed here as we control state manually */}
        <DialogContent className="max-w-4xl w-[90vw] h-[90vh] flex flex-col p-0"> {/* Adjust size as needed */}
          <DialogHeader className="p-4 border-b">
            <DialogTitle>CV Preview</DialogTitle>
            <DialogDescription>
              Review my CV below. Click Download to save as PDF.
            </DialogDescription>
          </DialogHeader>

          {/* Scrollable area for CV content */}
          <div className="flex-grow overflow-auto p-4"> {/* Added padding inside scroll area */}
          <div className="p-6 sm:p-8 bg-background text-foreground font-sans max-w-4xl mx-auto shadow-lg border border-border">

            {/* Render the CV Template *inside* the modal, passing the ref */}
            <CvTemplate
              innerRef={cvPreviewRef as React.RefObject<HTMLDivElement>} // Pass the ref here
              profile={profile}
              skillCategories={skillCategories}
              experiences={experiences}
              // Pass other data as needed
            />
          </div>
          </div>

          <DialogFooter className="p-4 border-t">
            <Button variant="outline" onClick={closeModal}>Close</Button>
            <Button onClick={() => handleExportPdf()}>
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
          <CvTemplate
              innerRef={cvPdfRef as React.RefObject<HTMLDivElement>} // Attach PDF ref
              mode="pdf" // Render in PDF mode (compact)
              profile={profile}
              skillCategories={skillCategories}
              experiences={experiences}
              // projects={projects} // Pass props even if section commented out
          />
      </div>
    </>
  );
};
