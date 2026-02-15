import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = [
    {
      name: 'Products & Materials',
      icon: '🧶',
      faqs: [
        {
          question: 'Are your products 100% handmade?',
          answer: 'Yes, absolutely! Every shawl, suit, sweater, and Poonchu is handwoven by skilled artisans in Himachal Pradesh using traditional techniques passed down through generations. We never use machine-made or mass-produced textiles.'
        },
        {
          question: 'What materials do you use?',
          answer: 'We primarily use natural fibers sourced from the Himalayas: pure wool from Kullu and Kinnaur sheep, pashmina from high-altitude goats, silk from ethical suppliers, and cashmere. All materials are naturally dyed using plant-based dyes like indigo, madder root, and turmeric.'
        },
        {
          question: 'How can I verify the authenticity of my purchase?',
          answer: 'Every product comes with a Certificate of Authenticity that includes details about the artisan, region of origin, materials used, and a unique product ID. You can also visit our Lakkar Bazar store in Shimla to see the weaving process firsthand.'
        },
        {
          question: 'What is a Poonchu?',
          answer: 'A Poonchu is a traditional Himachali wrap worn by women in rural areas. It\'s a rectangular piece of handwoven wool, often with geometric patterns, worn draped over the shoulders or as a head covering. It\'s both functional (warmth) and cultural (identity).'
        },
        {
          question: 'Do you offer custom designs or colors?',
          answer: 'Yes! We accept custom orders for special occasions. You can choose colors, patterns, and even request personalized embroidery. Custom orders take 4-6 weeks depending on complexity. Contact us at shop@trijas.com for details.'
        }
      ]
    },
    {
      name: 'Sizing & Fit',
      icon: '📏',
      faqs: [
        {
          question: 'How do I choose the right shawl size?',
          answer: 'Shawls come in standard sizes: Small (70"x28"), Medium (80"x32"), and Large (90"x36"). Small is perfect for draping, Medium for wrapping, and Large for layering. Check the product page for specific measurements.'
        },
        {
          question: 'What if the suit size doesn\'t fit?',
          answer: 'Our suits are unstitched fabric sets (3-piece: top, bottom, dupatta). You can take them to any tailor for custom stitching to your exact measurements. This ensures a perfect fit every time.'
        },
        {
          question: 'Are sweaters true to size?',
          answer: 'Our sweaters follow standard Indian sizing (S, M, L, XL, XXL). We recommend checking the size chart on each product page. If you\'re between sizes, we suggest sizing up for a relaxed fit, especially with wool sweaters.'
        },
        {
          question: 'Can I exchange if the size doesn\'t work?',
          answer: 'Absolutely! We offer free size exchanges within 30 days. Just ensure the item is unused with tags attached. Exchanges are processed within 7-10 days. See our Returns & Exchange page for details.'
        }
      ]
    },
    {
      name: 'Care Instructions',
      icon: '🧼',
      faqs: [
        {
          question: 'How do I wash wool shawls and sweaters?',
          answer: 'Hand wash in cold water with a mild detergent (preferably wool-specific). Gently squeeze—don\'t wring. Lay flat to dry away from direct sunlight. Avoid machine washing or dry cleaning unless specified on the care label.'
        },
        {
          question: 'Can I dry clean pashmina shawls?',
          answer: 'Yes, pashmina can be dry cleaned, but it\'s not always necessary. For light dirt, spot clean with a damp cloth. For deeper cleaning, use a professional dry cleaner experienced with delicate fibers.'
        },
        {
          question: 'How do I remove wrinkles?',
          answer: 'Use a steamer on low heat or iron on the wool setting (medium heat) with a cloth barrier between the iron and fabric. Never apply direct high heat to natural fibers as it can damage them.'
        },
        {
          question: 'How should I store these textiles?',
          answer: 'Fold and store in a breathable cotton bag (never plastic). Add cedar balls or lavender sachets to repel moths. Avoid hanging heavy shawls as they can stretch. For long-term storage, ensure the area is cool, dry, and dark.'
        },
        {
          question: 'What if there\'s pilling on my wool garment?',
          answer: 'Pilling (small fabric balls) is natural with wool. Gently remove with a fabric shaver or sweater comb. Regular pilling removal keeps your garment looking new. Avoid excessive friction during wear to minimize pilling.'
        }
      ]
    },
    {
      name: 'Orders & Payments',
      icon: '💳',
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept credit/debit cards (Visa, Mastercard, Amex), UPI, net banking, digital wallets (Paytm, PhonePe, Google Pay), and Cash on Delivery (COD) for orders within India. International customers can use credit cards or PayPal.'
        },
        {
          question: 'Is it safe to use my credit card on your website?',
          answer: 'Absolutely. All payments are processed through secure, PCI-compliant gateways with SSL encryption. We never store your card details on our servers.'
        },
        {
          question: 'Can I modify or cancel my order after placing it?',
          answer: 'Yes, but only before the order is shipped (usually within 2-3 hours of placing). Contact us immediately at shop@trijas.com or call +91 177 2652 XXX with your order number.'
        },
        {
          question: 'Do you offer gift wrapping?',
          answer: 'Yes! Select the "Gift Wrap" option at checkout for ₹150. We\'ll wrap your item in traditional Lokta paper with a handwritten note if you provide a message.'
        },
        {
          question: 'Can I place bulk or wholesale orders?',
          answer: 'Yes, we welcome wholesale and bulk orders for retailers, resorts, and corporate gifting. Minimum order is 10 units. Contact us at shop@trijas.com for wholesale pricing and terms.'
        }
      ]
    },
    {
      name: 'Shipping & Delivery',
      icon: '📦',
      faqs: [
        {
          question: 'How long does shipping take?',
          answer: 'India: 3-7 business days depending on location. International: 10-15 business days. We ship within 2-3 days of order confirmation. You\'ll receive tracking details via email and SMS.'
        },
        {
          question: 'Do you ship internationally?',
          answer: 'Yes, we ship to 50+ countries including USA, Canada, UK, Europe, Australia, Middle East, and Asia. International orders may be subject to customs duties (buyer\'s responsibility).'
        },
        {
          question: 'What are the shipping charges?',
          answer: 'India: ₹150 for orders below ₹2,000. FREE shipping on orders above ₹5,000. International: ₹1,800-₹2,800 depending on region. FREE international shipping on orders above ₹10,000. See our Shipping page for details.'
        },
        {
          question: 'Can I track my order?',
          answer: 'Yes! Once shipped, you\'ll receive a tracking ID via email and SMS. You can track your package in real-time through the courier\'s website or app.'
        },
        {
          question: 'What if my package doesn\'t arrive?',
          answer: 'All shipments are insured. If your package is lost or significantly delayed, contact us within 48 hours of the expected delivery date. We\'ll investigate and send a replacement or full refund.'
        }
      ]
    },
    {
      name: 'Sustainability & Ethics',
      icon: '🌿',
      faqs: [
        {
          question: 'Are your practices sustainable?',
          answer: 'Yes. We use natural fibers, plant-based dyes, and zero-waste production methods. Our packaging is biodegradable. We\'ve planted 5,000+ trees and run solar-powered workshops. See our Sustainability page for more.'
        },
        {
          question: 'Do artisans receive fair wages?',
          answer: 'Absolutely. We ensure artisans are paid 30-40% above local wage standards. We also provide health insurance, education support for their children, and skill development workshops. Fair trade is at our core.'
        },
        {
          question: 'How do you support local communities?',
          answer: 'We partner with 250+ artisan families across Himachal Pradesh, providing consistent income, preserving traditional techniques, and investing in community infrastructure like clean water and schools.'
        },
        {
          question: 'Are your dyes chemical-free?',
          answer: 'Most of our textiles use natural plant-based dyes (indigo, turmeric, madder). Some modern colors use low-impact synthetic dyes that are AZO-free and certified safe. We clearly label dyeing methods on product pages.'
        }
      ]
    },
    {
      name: 'About TriJas',
      icon: '🏔️',
      faqs: [
        {
          question: 'How long have you been in business?',
          answer: 'Over 30 years! We were founded in 1993 by the Kaur family in Lakkar Bazar, Shimla. What started as a small shop has grown into a trusted name for authentic Himachali textiles.'
        },
        {
          question: 'Can I visit your physical store?',
          answer: 'Yes, please do! Visit us at Lakkar Bazar, near Tripti Restaurant, Shimla. We\'re open Mon-Sat (10 AM - 8 PM) and Sunday (11 AM - 7 PM). You\'ll see our full collection and meet the family behind the brand.'
        },
        {
          question: 'Do you offer tours or workshops?',
          answer: 'Yes! We occasionally organize weaving workshops and artisan village tours in Kullu and Kinnaur. Follow us on Instagram or subscribe to our newsletter to stay updated on upcoming events.'
        },
        {
          question: 'What makes TriJas different from other textile shops?',
          answer: 'We\'re family-run, locally rooted, and artisan-first. Every product is handmade in Himachal Pradesh—no outsourcing, no middlemen. We know every artisan by name and ensure fair wages, quality, and authenticity.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative h-80 bg-linear-to-r from-himachali-maroon via-himachali-red to-himachali-orange mb-12">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <HelpCircle size={64} className="mb-4" />
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-white/90 max-w-2xl text-center">
            Everything you need to know about TriJas products and services
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center mb-12">
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Have a question? We've compiled answers to the most common queries. If you don't find 
            what you're looking for, feel free to <a href="/contact" className="text-himachali-red hover:underline font-semibold">contact us</a>.
          </p>
        </div>

        {/* FAQ Categories */}
        {categories.map((category, catIndex) => (
          <div key={catIndex} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{category.icon}</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink">
                {category.name}
              </h2>
            </div>

            <div className="space-y-4">
              {category.faqs.map((faq, faqIndex) => {
                const globalIndex = `${catIndex}-${faqIndex}`;
                const isOpen = openIndex === globalIndex;

                return (
                  <div
                    key={faqIndex}
                    className="bg-white rounded-lg card-shadow overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(globalIndex)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition"
                    >
                      <h3 className="font-semibold text-ink pr-4">{faq.question}</h3>
                      {isOpen ? (
                        <ChevronUp className="text-himachali-red flex-shrink-0" size={24} />
                      ) : (
                        <ChevronDown className="text-himachali-orange flex-shrink-0" size={24} />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-4 pt-2">
                        <p className="text-muted leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Still Have Questions CTA */}
        <div className="mt-16 bg-linear-to-r from-himachali-red to-himachali-orange rounded-lg p-8 sm:p-12 text-white text-center geometric-border">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="mb-6 text-white/90 max-w-2xl mx-auto">
            Our team is here to help! Reach out via email, phone, or visit us in Shimla. 
            We typically respond within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-himachali-red px-8 py-3 rounded-lg font-semibold hover:bg-cream transition"
            >
              Contact Us
            </a>
            <a
              href="mailto:shop@trijas.com"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-himachali-red transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
