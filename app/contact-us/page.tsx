"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import contactImage from "../../public/images/contact-us.png";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjects = [
  { id: "general", label: "General Inquiry" },
  { id: "support", label: "Technical Support" },
  { id: "billing", label: "Billing Question" },
  { id: "partnership", label: "Partnership" },
];

const socialLinks = [
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
];

export default function Contact() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    toast("Message sent!");
    form.reset();
  };

  return (
    <div className="min-h-screen relative pt-16 pb-32">
      {/* Split Background */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-[#FFD0A0]/40" />
        <div className="h-1/2 bg-white" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="pt-16 pb-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl mb-12 leading-relaxed font-['Bona_Nova'] text-center text-[#860000]"
          >
            Ask Anything <br />
            <span>We are here to assist</span>
          </motion.h2>
        </div>

        {/* Form Container */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-12 md:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <Image
                  src={contactImage}
                  alt="Contact support illustration"
                  className="w-full max-w-md rounded-xl shadow-soft"
                  placeholder="blur"
                />
              </motion.div>

              {/* Right Column - Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8">Contact Us</h2>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    {/* Full Name and Email on the same row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your full name"
                                className="border-0 rounded-none shadow-none focus:outline-none focus:shadow-[0_0_6px_2px_#FF6F00]/40"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Email */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Enter your email address"
                                className="border-0 rounded-none shadow-none focus:outline-none focus:shadow-[0_0_6px_2px_#FF6F00]/40"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Subject */}
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              value={field.value}
                              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                            >
                              {subjects.map((subject) => (
                                <div
                                  key={subject.id}
                                  className="flex items-center space-x-2"
                                >
                                  <RadioGroupItem
                                    value={subject.id}
                                    id={subject.id}
                                  />
                                  <Label
                                    htmlFor={subject.id}
                                    className="text-sm font-medium cursor-pointer"
                                  >
                                    {subject.label}
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us how we can help you..."
                              className="min-h-[120px] resize-y border-0 rounded-none shadow-none focus:outline-none focus:shadow-[0_0_6px_2px_#FF6F00]/40"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit and Socials */}
                    <div className="flex justify-end pt-6">
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-[#FF6F00] rounded-full px-8 w-full md:w-auto"
                      >
                        Send Message
                      </Button>
                    </div>

                    {/* Socials */}
                    <div className="flex justify-end space-x-3 w-full md:w-auto">
                      {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                          <motion.a
                            key={social.label}
                            href={social.href}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.6 + index * 0.1,
                            }}
                            whileHover={{ scale: 1.1 }}
                            viewport={{ once: true }}
                            className="p-3 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            aria-label={social.label}
                          >
                            <Icon size={20} />
                          </motion.a>
                        );
                      })}
                    </div>
                  </form>
                </Form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
