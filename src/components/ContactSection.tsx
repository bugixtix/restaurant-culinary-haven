'use client';

import { useState } from 'react';
import { Button, Input, Card, CardBody, Select, SelectItem, Textarea } from '@heroui/react';
import { Mail, Phone, MapPin, Calendar, Users } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'reservations@restaurant .com',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Gourmet Avenue, Culinary City, CC 12345',
    },
  ];

  const timeSlots = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'];
  const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];

  return (
    <section id="contact" className="py-20 px-4 bg-restaurant-rich-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Reservations & Contact</h2>
          <p className="section-subtitle">Get in touch with us or book your table today</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-950 border border-restaurant-forest-green/30 hover:border-restaurant-cyan transition-colors flex flex-wrap"
              >
                <div className="  flex flex-wrap sm:flex-nowrap justify-center sm:justify-start items-center gap-4 text-center">
                  <div className="flex flex-col items-center justify-center bg-restaurant-forest-green/20 rounded-lg sm:w-20 w-[100%] h-20 p-4">
                    <Icon className="w-8 h-8 text-restaurant-cyan" />
                  </div>
                  <div className="flex flex-col justify-center sm:items-start">
                    <h3 className="text-white font-semibold text-lg">{info.label}</h3>
                    <p className="text-gray-400 px-2">{info.value}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Reservation Form */}
        <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border border-restaurant-forest-green/30 max-w-3xl mx-auto">
          <CardBody className="gap-6 p-4 sm:p-8">
            <h3 className="text-2xl font-bold text-white mb-2">Make a Reservation</h3>

            {submitted && (
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 text-green-300 text-center">
                ✓ Thank you! We'll confirm your reservation shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="name"
                  label="Full Name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  classNames={{
                    input: 'bg-gray-800 placeholder:text-gray-500 outline-none',
                  }}
                  color="success"
                />
                <Input
                  type="email"
                  name="email"
                  label="Email Address"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  classNames={{
                    input: 'bg-gray-800 outline-none placeholder:text-gray-500',
                  }}
                  color="success"
                />
              </div>

              {/* Phone */}
              <Input
                type="tel"
                name="phone"
                label="Phone Number"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
                required
                classNames={{
                  input: 'bg-gray-800 outline-none placeholder:text-gray-500',
                  
                }}
                color="success"
              />

              {/* Date, Time, Guests Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Input
                  type="date"
                  name="date"
                  label="Preferred Date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  classNames={{
                    input: 'bg-gray-800 outline-none',
                  }}
                  color="success"
                />
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleSelectChange}
                  required
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:border-restaurant-forest-green focus:outline-none"
                >
                  <option value="">Select Time</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleSelectChange}
                  required
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 text-md focus:border-restaurant-forest-green focus:outline-none"
                >
                  <option  value="">Number of Guests</option>
                  {guestOptions.map((option) => (
                    <option key={option} value={option}>
                      {option} {option === '1' ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <Textarea
                name="message"
                label="Special Requests (Optional)"
                placeholder="Dietary restrictions, special occasion, seating preference..."
                value={formData.message}
                onChange={handleChange}
                minRows={4}
                classNames={{
                  input: 'bg-gray-800 placeholder:text-gray-500',
                }}
                color="success"
              />

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-restaurant-forest-green text-white font-semibold hover:bg-restaurant-deep-green transition-colors"
              >
                Confirm Reservation
              </Button>

              <p className="text-gray-400 text-sm text-center">
                We'll send a confirmation email within 1 hour. Thank you for choosing Culinary Haven!
              </p>
            </form>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
