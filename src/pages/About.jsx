
import React from "react";
import {
  Zap,
  Package,
  Users,
  Star,
  Truck,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router";

const About = () => {
  const stats = [
    {
      icon: Package,
      value: "20K+",
      label: "Products",
    },
    {
      icon: Users,
      value: "50K+",
      label: "Happy Customers",
    },
    {
      icon: Star,
      value: "4.9",
      label: "Avg. Rating",
    },
    {
      icon: Truck,
      value: "99%",
      label: "On-time Delivery",
    },
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Trust",
      description:
        "Every product is verified for quality and authenticity before listing.",
    },
    {
      icon: Truck,
      title: "Speed",
      description:
        "We obsess over delivery times so your orders arrive when promised.",
    },
    {
      icon: HeartHandshake,
      title: "Community",
      description:
        "Built around real customer feedback, not just business metrics.",
    },
    {
      icon: Star,
      title: "Quality",
      description:
        "We curate the best — no filler, no junk, just great products.",
    },
  ];

  const team = [
    {
      name: "Aryan Shah",
      role: "Founder & CEO",
      initial: "A",
      color: "bg-lime-400 text-black",
    },
    {
      name: "Priya Mehta",
      role: "Head of Product",
      initial: "P",
      color: "bg-blue-500 text-white",
    },
    {
      name: "Rohan Verma",
      role: "Lead Engineer",
      initial: "R",
      color: "bg-purple-500 text-white",
    },
    {
      name: "Sneha Kapoor",
      role: "Design Director",
      initial: "S",
      color: "bg-rose-500 text-white",
    },
  ];

  return (
    <main>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero */}
        <div className="text-center mb-16">

          <div className="w-16 h-16 bg-lime-400 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Zap
              size={28}
              className="text-black fill-black"
            />
          </div>

          <h1 className="font-bold text-4xl sm:text-5xl mb-5 text-white">
            About{" "}
            <span className="text-lime-400">
              SkyMart
            </span>
          </h1>

          <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
            SkyMart is a next-generation e-commerce platform built
            to make online shopping fast, fair, and enjoyable — for
            everyone.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="bg-[#111] border border-white/10 rounded-2xl p-5 text-center"
              >
                <Icon
                  size={20}
                  className="text-lime-400 mx-auto mb-2"
                />

                <p className="font-bold text-2xl text-white">
                  {stat.value}
                </p>

                <p className="text-white/30 text-xs mt-1">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Our Story */}
        <div className="bg-[#111] border border-white/10 rounded-3xl p-8 sm:p-10 mb-12">

          <h2 className="font-bold text-2xl mb-4 text-white">
            Our Story
          </h2>

          <div className="space-y-4 text-white/50 text-sm leading-relaxed">

            <p>
              SkyMart started in 2022 as a small side project —
              two engineers tired of bloated, slow e-commerce
              experiences. We asked ourselves: what if shopping
              online was actually{" "}
              <em className="text-white/70">
                enjoyable
              </em>
              ?
            </p>

            <p>
              Three years later, SkyMart serves over 50,000
              customers across the country. We stock electronics,
              fashion, jewelry, and everyday essentials — all at
              prices that don't require a second mortgage.
            </p>

            <p>
              We're still the same team at heart: obsessed with
              speed, transparency, and making you feel good about
              every purchase you make here.
            </p>

          </div>
        </div>

        {/* What We Stand For */}
        <section className="mb-12">

          <h2 className="font-bold text-2xl mb-6 text-center text-white">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-[#111] border border-white/10 hover:border-lime-400/25 rounded-2xl p-6 transition-all duration-200 flex gap-4"
                >
                  <div className="w-10 h-10 bg-lime-400/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon
                      size={18}
                      className="text-lime-400"
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-white text-base mb-1">
                      {item.title}
                    </h3>

                    <p className="text-white/40 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </section>

        {/* Meet The Team */}
        <section className="mb-12">

          <h2 className="font-bold text-2xl mb-6 text-center text-white">
            Meet the Team
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

            {team.map((member) => (
              <div
                key={member.name}
                className="bg-[#111] border border-white/10 rounded-2xl p-5 text-center"
              >
                <div
                  className={`w-12 h-12 ${member.color} rounded-2xl flex items-center justify-center font-bold text-xl mx-auto mb-3`}
                >
                  {member.initial}
                </div>

                <p className="font-semibold text-white/80 text-sm">
                  {member.name}
                </p>

                <p className="text-white/30 text-xs mt-0.5">
                  {member.role}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* CTA */}
        <div className=" border border-lime-400/20 rounded-3xl p-8 text-center">

          <h2 className="font-bold text-2xl text-white mb-3">
            Ready to shop?
          </h2>

          <p className="text-white/40 text-sm mb-6">
            Explore thousands of products at unbeatable prices.
          </p>

          <NavLink
            href="/shop"
            className="inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-black px-8 py-3.5 text-base font-bold rounded-xl transition"
          >
            Browse Products
            <ArrowRight size={18} />
          </NavLink>

        </div>

      </div>
    </main>
  );
};

export default About;

