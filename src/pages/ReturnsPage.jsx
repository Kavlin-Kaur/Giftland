import { RefreshCw, CheckCircle, XCircle, Clock, Package, AlertCircle } from 'lucide-react';

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative h-80 bg-linear-to-r from-himachali-maroon via-himachali-red to-himachali-orange mb-12">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Returns & Exchange</h1>
          <p className="text-lg text-white/90 max-w-2xl text-center">
            Your satisfaction is our priority—hassle-free returns within 30 days
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-lg p-6 text-center card-shadow">
            <div className="flex justify-center mb-4 text-himachali-red">
              <Clock size={40} />
            </div>
            <h3 className="font-serif font-bold text-lg text-ink mb-2">30-Day Window</h3>
            <p className="text-sm text-muted">Return or exchange within 30 days of delivery</p>
          </div>

          <div className="bg-white rounded-lg p-6 text-center card-shadow">
            <div className="flex justify-center mb-4 text-himachali-orange">
              <RefreshCw size={40} />
            </div>
            <h3 className="font-serif font-bold text-lg text-ink mb-2">Easy Process</h3>
            <p className="text-sm text-muted">Simple 3-step return or exchange procedure</p>
          </div>

          <div className="bg-white rounded-lg p-6 text-center card-shadow">
            <div className="flex justify-center mb-4 text-himachali-maroon">
              <Package size={40} />
            </div>
            <h3 className="font-serif font-bold text-lg text-ink mb-2">Free Pickups</h3>
            <p className="text-sm text-muted">We arrange free pickup for returns in India</p>
          </div>
        </div>

        {/* Return Policy */}
        <div className="mb-12">
          <div className="bg-white rounded-lg p-8 sm:p-12 card-shadow geometric-border">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink mb-6">
              Return Policy
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg text-ink mb-3">Eligibility Criteria</h3>
                <div className="space-y-3">
                  <p className="flex items-start gap-3 text-muted">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span>Item must be unused, unworn, and in original condition with all tags attached</span>
                  </p>
                  <p className="flex items-start gap-3 text-muted">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span>Original packaging and invoice must be included</span>
                  </p>
                  <p className="flex items-start gap-3 text-muted">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span>Product should not have any stains, odors, or alterations</span>
                  </p>
                  <p className="flex items-start gap-3 text-muted">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span>Return initiated within 30 days from the date of delivery</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-ink mb-3">Non-Returnable Items</h3>
                <div className="space-y-3">
                  <p className="flex items-start gap-3 text-muted">
                    <XCircle className="text-red-600 mt-1 flex-shrink-0" size={20} />
                    <span>Custom-made or personalized items (embroidery, monograms, etc.)</span>
                  </p>
                  <p className="flex items-start gap-3 text-muted">
                    <XCircle className="text-red-600 mt-1 flex-shrink-0" size={20} />
                    <span>Items marked as "Final Sale" or purchased during clearance</span>
                  </p>
                  <p className="flex items-start gap-3 text-muted">
                    <XCircle className="text-red-600 mt-1 flex-shrink-0" size={20} />
                    <span>Products worn, washed, or altered in any way</span>
                  </p>
                  <p className="flex items-start gap-3 text-muted">
                    <XCircle className="text-red-600 mt-1 flex-shrink-0" size={20} />
                    <span>Gift cards and downloadable digital content</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-ink mb-3">Refund Process</h3>
                <p className="text-muted mb-4">
                  Once we receive and inspect your returned item, we'll send you an email confirmation. 
                  If approved, your refund will be processed within 5-7 business days.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-himachali-red">
                        <th className="py-3 px-4 text-ink">Payment Method</th>
                        <th className="py-3 px-4 text-ink">Refund Timeline</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted">
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Store Credit</td>
                        <td className="py-3 px-4">Instant (credited within 24 hours)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Credit/Debit Card</td>
                        <td className="py-3 px-4">5-7 business days</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Net Banking/UPI</td>
                        <td className="py-3 px-4">5-7 business days</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Cash on Delivery</td>
                        <td className="py-3 px-4">7-10 business days (bank transfer)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exchange Policy */}
        <div className="mb-12">
          <div className="bg-white rounded-lg p-8 sm:p-12 card-shadow geometric-border">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink mb-6">
              Exchange Policy
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg text-ink mb-3">When Can I Exchange?</h3>
                <div className="space-y-3">
                  <p className="flex items-start gap-3 text-muted">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Size/Color Issues:</strong> Wrong size delivered or color doesn't match expectations</span>
                  </p>
                  <p className="flex items-start gap-3 text-muted">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Defective Items:</strong> Manufacturing defects or damage during transit (with photo evidence)</span>
                  </p>
                  <p className="flex items-start gap-3 text-muted">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Wrong Item:</strong> If you received a different product than ordered</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-ink mb-3">Exchange Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-himachali-red text-white flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink mb-1">Initiate Exchange Request</h4>
                      <p className="text-sm text-muted">
                        Email us at shop@trijas.com with your order number, reason for exchange, 
                        and photos if applicable. We'll respond within 24 hours.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-himachali-orange text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink mb-1">Return Pickup Arranged</h4>
                      <p className="text-sm text-muted">
                        Once approved, we'll arrange a free pickup from your address (India only). 
                        International customers can ship via tracked mail.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-himachali-maroon text-white flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink mb-1">Replacement Shipped</h4>
                      <p className="text-sm text-muted">
                        After receiving and inspecting your return (2-3 days), we'll ship the 
                        replacement item immediately at no extra cost.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-ink mb-3">Exchange Fees</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-himachali-orange">
                        <th className="py-3 px-4 text-ink">Reason</th>
                        <th className="py-3 px-4 text-ink">Exchange Fee</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted">
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Defective/Wrong Item</td>
                        <td className="py-3 px-4 font-bold text-green-600">FREE</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Size/Color Exchange (India)</td>
                        <td className="py-3 px-4 font-bold text-green-600">FREE</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Size/Color Exchange (International)</td>
                        <td className="py-3 px-4">Shipping charges apply</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Damaged/Defective Items */}
        <div className="mb-12">
          <div className="bg-white rounded-lg p-8 card-shadow">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-himachali-gold mt-1 flex-shrink-0" size={28} />
              <div>
                <h2 className="text-2xl font-serif font-bold text-ink mb-4">
                  Received a Damaged or Defective Item?
                </h2>
                <p className="text-muted mb-4">
                  We take quality seriously. If your item arrives damaged or defective, 
                  we'll make it right immediately:
                </p>
                <div className="space-y-2 text-muted">
                  <p className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                    <span>Contact us within 48 hours with photos of the damage/defect</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                    <span>We'll send a replacement immediately (no need to wait for return)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                    <span>Pickup of defective item arranged at our expense</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                    <span>Full refund option available if replacement not preferred</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-lg p-8 sm:p-12 card-shadow geometric-border">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink mb-8">
            Returns & Exchange FAQs
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg text-ink mb-2">
                Can I return a gift someone bought for me?
              </h3>
              <p className="text-muted">
                Yes! Provide the order number and we'll process a return. You can choose store 
                credit or we can issue a refund to the original buyer with their permission.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-ink mb-2">
                What if I lost the original tags or packaging?
              </h3>
              <p className="text-muted">
                We understand accidents happen. Contact us with photos and your order number. 
                For unused items in good condition, we may still accept the return on a case-by-case basis.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-ink mb-2">
                How long does the exchange process take?
              </h3>
              <p className="text-muted">
                Typically 7-10 days from pickup to receiving the replacement. For defective items, 
                we expedite and ship the replacement within 2-3 days of your report.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-ink mb-2">
                Can I return sale or discounted items?
              </h3>
              <p className="text-muted">
                Yes, most sale items can be returned within the 30-day window. However, items marked 
                as "Final Sale" or from clearance events are non-returnable (this is mentioned on the 
                product page).
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-ink mb-2">
                What if the item I want to exchange is out of stock?
              </h3>
              <p className="text-muted">
                We'll notify you if the replacement is unavailable. You can choose a different product 
                of equal or lesser value, receive store credit, or opt for a full refund.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-linear-to-r from-himachali-red to-himachali-orange rounded-lg p-8 text-white text-center geometric-border">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
            Need Help with a Return or Exchange?
          </h2>
          <p className="mb-6 text-white/90 max-w-2xl mx-auto">
            Our customer support team is ready to assist you. Reach out and we'll make it right!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-himachali-red px-8 py-3 rounded-lg font-semibold hover:bg-cream transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
