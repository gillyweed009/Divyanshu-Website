import { FileText, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface ThesisCardProps {
  title: string;
  description: string;
  abstract: string;
  pdfLink?: string;
}

const ThesisCard = ({ title, description, abstract, pdfLink }: ThesisCardProps) => {
  return (
    <Card className="group hover:shadow-[0_8px_30px_hsl(180_65%_45%/0.2)] transition-all duration-300 hover:scale-[1.02] border-border/50 bg-gradient-to-br from-card to-card/50">
      <CardHeader>
        <div className="flex items-start justify-between">
          <FileText className="h-10 w-10 text-primary mb-3 group-hover:animate-float" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">Abstract Preview:</p>
          <p className="text-sm text-muted-foreground line-clamp-3">{abstract}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="hero" className="w-full group" asChild={!!pdfLink}>
          {pdfLink ? (
            <a href={pdfLink} target="_blank" rel="noopener noreferrer">
              View Full Report
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          ) : (
            <>
              View Full Report
              <ExternalLink className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ThesisCard;
