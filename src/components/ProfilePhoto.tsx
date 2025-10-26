import { User } from "lucide-react";

interface ProfilePhotoProps {
  imageUrl?: string;
  name?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const ProfilePhoto = ({ 
  imageUrl, 
  name = "Divyanshu Mohanty", 
  size = "lg",
  className = "" 
}: ProfilePhotoProps) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24", 
    lg: "w-32 h-32"
  };

  const iconSizes = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16"
  };

  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className={`relative ${className}`}>
      <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-4 border-primary/30 flex items-center justify-center overflow-hidden animate-scale-in`}>
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`${name} - Profile Photo`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-muted/50 flex items-center justify-center">
            {size === "lg" ? (
              <span className="text-2xl font-bold text-primary">{initials}</span>
            ) : (
              <User className={`${iconSizes[size]} text-primary/60`} />
            )}
          </div>
        )}
      </div>
      
      {/* Decorative atom icon for large size */}
      {size === "lg" && (
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-background rounded-full border-2 border-primary/20 flex items-center justify-center">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
      )}
    </div>
  );
};

export default ProfilePhoto;