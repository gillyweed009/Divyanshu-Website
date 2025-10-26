import { BookOpen, ExternalLink } from "lucide-react";

interface PublicationCardProps {
  title: string;
  authors: string;
  journal: string;
  year: string;
  link?: string;
}

const PublicationCard = ({ title, authors, journal, year, link }: PublicationCardProps) => {
  return (
    <div className="group p-6 rounded-lg border border-border/50 bg-gradient-to-br from-card to-muted/30 hover:shadow-[0_4px_20px_hsl(180_65%_45%/0.15)] transition-all duration-300 hover:scale-[1.01]">
      <div className="flex items-start gap-4">
        <BookOpen className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:animate-float" />
        <div className="flex-1 space-y-2">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{authors}</p>
          <p className="text-sm text-muted-foreground italic">
            {journal}, {year}
          </p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-primary hover:underline mt-2"
            >
              Read Publication
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
