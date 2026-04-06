"use client";
import logo from "@/app/asset/img2.png";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Register() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
  });

  const promises = [
    { icon: "✅", text: "Free 1-on-1 consultation with certified expert" },
    { icon: "🏠", text: "100% online — join from anywhere in India" },
    { icon: "🧘", text: "Beginner-friendly, small batch sizes" },
    { icon: "🌿", text: "Natural healing, no medication required" },
    { icon: "💚", text: "Women-only safe & supportive space" },
  ];

  const fields = [
    { label: "Full Name", key: "name", type: "text", placeholder: "Your full name" },
    { label: "WhatsApp Number", key: "phone", type: "tel", placeholder: "+91 your number" },
    { label: "Email Address", key: "email", type: "email", placeholder: "your@email.com" },
  ];

  console.log(form);

  return (
    <section id="register" className="py-24 px-5 md:px-20 flex items-center justify-center mobile-responsive "
    >
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-20 place-items-center ">
          <p className="text-[#D4956A] text-[20px font-semibold tracking-[0.2em] uppercase mb-3">
            Get Started Today
          </p>

          <h2 className="font-['Playfair_Display'] text-[clamp(34px,3.8vw,52px)] font-normal text-bark leading-tight mb-8">
            Begin Your<br />
            <em className="text-moss">Healing Journey</em>
          </h2>

          <div className="flex flex-col gap-4">
            {promises.map((p, i) => (
              <motion.div
                key={p.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 text-[14px] text-bark/65 leading-[1.6] "
              >
                <span className="w-7 h-7 rounded-full bg-moss/10 flex items-center justify-center text-[13px] flex-shrink-0 mt-0.5">
                  {p.icon}
                </span>
                {p.text}
              </motion.div>
            ))}
          </div>



          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-12 border border-moss/10 shadow-sm text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center py-4"
                >
                  <Image src={logo} alt="" className="w-25" />
                </motion.div>

                <h3 className="font-['Playfair_Display'] text-2xl font-normal text-bark mb-3">
                  Thank You!
                </h3>

                <p className="text-bark/55 text-sm leading-relaxed">
                  Our team will reach out on WhatsApp within 24 hours. Your healing journey begins now.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                className=" rounded-3xl border border-pink-700  shadow-2xl" 
                style={{padding:"10px 30px",
                  
                }}
              >
                <h3 className="font-['Playfair_Display'] text-3xl font-normal text-bark mb-1 text-center text-pink-700 ">
                  Book Free Consultation
                </h3>

                <p className="text-bark/45 text-[15px] mb-7 leading-relaxed text-pink-950">
                  Fill in your details and we'll reach out on WhatsApp within 24 hours.
                </p>

                {fields.map((field, index) => (
                  <div key={index} className="mb-2">
                    <label className="block text-[15px] font-jost font-semibold tracking-[0.1em] uppercase text-[#3D5A3E] mt-4">
                      {field.label}
                    </label>

                    <motion.input
                      whileFocus={{
                        boxShadow: "0 0 0 3px rgba(61,90,62,0.12)",
                        borderColor: "#3D5A3E",
                      }}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key]}
                      onChange={(e) =>
                        setForm({ ...form, [field.key]: e.target.value })
                      }
                      className="w-full bg-[#FAF6F1] font-jost border border-moss/15 rounded-xl text-sm text-ink outline-none placeholder-bark/30 transition-all"
                     style={{padding:"10px"}}
                   />
                  </div>
                ))}

                <div className="mb-5">
                  <label className="block text-[11px] font-jost font-semibold tracking-widest uppercase text-moss mt-4">
                    I'm Interested In
                  </label>

                  <motion.select
                    whileFocus={{
                      boxShadow: "0 0 0 3px rgba(61,90,62,0.12)",
                    }}
                    value={form.program}
                    onChange={(e) =>
                      setForm({ ...form, program: e.target.value })
                    }
                    className="w-full bg-[#FAF6F1] font-jost border border-moss/15 rounded-xl px-4 py-3.5 text-sm text-ink outline-none appearance-none cursor-pointer"
                  style={{padding:"10px"}}
                  >
                    <option value="">Select a program</option>
                    <option>PCOD & PCOS Healing Yoga Program</option>
                    <option>Prenatal Yoga</option>
                    <option>Postnatal Yoga</option>
                    <option>Yoga for All (General Wellness)</option>
                    <option>Not sure — need guidance</option>
                  </motion.select>
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 14px 40px rgba(61,90,62,0.4)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSubmitted(true)}
                  className="w-full bg-red-800 text-white text-[15px] font-medium tracking-wide py-4 rounded-xl shadow-[0_8px_30px_rgba(61,90,62,0.35)]  cursor-pointer border-none mt-4  "
                 style={{padding:"10px"}}>
                  Book My Free Consultation
                </motion.button>

                <p className="text-center text-[11px] text-bark/35 mt-4 tracking-wide">
                  🔒 Your details are safe. We never spam.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
      </div>
    </section>
  );
}