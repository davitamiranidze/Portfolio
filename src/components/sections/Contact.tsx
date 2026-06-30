import { motion } from "motion/react";
import SectionTitle from "../ui/SectionTitle";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const contactDefaultValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ContactFormValues>({
    defaultValues: contactDefaultValues,
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      reset();
      toast.success("Message sent successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="section">
      <SectionTitle
        title="Contact Me"
        subtitle="Have a project or opportunity? Let's connect."
      />

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h3 className="text-2xl font-semibold sm:text-3xl">
            Let's work together.
          </h3>

          <p className="paragraph mt-4">
            I'm currently looking for software engineering opportunities,
            internships, and freelance projects.
          </p>

          <div className="mt-6 sm:mt-8">
            <p className="text-sm text-zinc-700 sm:text-base dark:text-zinc-300">
              <span className="font-semibold">Email</span>
              <br />
              <a
                href="mailto:davit.amiranidze@gmail.com"
                className="break-all transition hover:text-black dark:hover:text-white"
              >
                davit.amiranidze@gmail.com
              </a>
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="https://www.linkedin.com/in/daviti-amiranidze"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/davitamiranidze"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
            className="card space-y-4 sm:space-y-5"
          >
            <div>
              <input
                {...register("name", {
                  required: "Name is required",
                })}
                className="input"
                placeholder="Your name"
              />

              {errors.name && <p className="errorMsg">{errors.name.message}</p>}
            </div>

            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="Email address"
                className="input"
              />
              {errors.email && (
                <p className="errorMsg">{errors.email.message}</p>
              )}
            </div>

            <div>
              <textarea
                {...register("message", { required: "Message is required" })}
                rows={6}
                placeholder="Write your message..."
                className="input min-h-36 resize-y"
              />
              {errors.message && (
                <p className="errorMsg">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="btn-primary w-full sm:w-auto"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
