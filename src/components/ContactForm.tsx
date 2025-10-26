import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Send, ExternalLink } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // EmailJS configuration (you'll need to set these up at emailjs.com)
  const EMAILJS_SERVICE_ID = 'your_service_id'; // Replace with your EmailJS service ID
  const EMAILJS_TEMPLATE_ID = 'your_template_id'; // Replace with your EmailJS template ID
  const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Replace with your EmailJS public key

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Option 1: Using EmailJS (requires setup at emailjs.com)
      if (EMAILJS_SERVICE_ID !== 'your_service_id') {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            to_email: 'divyanshumohanty22@gmail.com',
            message: formData.message,
          },
          EMAILJS_PUBLIC_KEY
        );
        
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
      } else {
        // Option 2: Fallback to mailto (opens user's email client)
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;
        const mailtoLink = `mailto:divyanshumohanty22@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        
        window.open(mailtoLink, '_blank');
        
        toast({
          title: "Email client opened!",
          description: "Your email client should open with the pre-filled message.",
        });
      }
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly at divyanshumohanty22@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDirectEmail = () => {
    const mailtoLink = 'mailto:divyanshumohanty22@gmail.com';
    window.open(mailtoLink, '_blank');
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/divyanshu-mohanty', '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            className="w-full min-h-[150px]"
          />
        </div>
      </div>
      <div className="space-y-3">
        <Button type="submit" variant="hero" className="w-full" disabled={isLoading}>
          <Send className="mr-2 h-4 w-4" />
          {isLoading ? "Sending..." : "Send Message"}
        </Button>
        
        <div className="text-center text-sm text-muted-foreground">
          Or contact me directly:
        </div>
        
        <div className="flex gap-3 justify-center">
          <Button 
            type="button" 
            variant="outline" 
            onClick={handleDirectEmail}
            className="flex-1"
          >
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
          
          <Button 
            type="button" 
            variant="outline" 
            onClick={handleLinkedIn}
            className="flex-1"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
