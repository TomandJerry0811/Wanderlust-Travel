import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  Users,
  CreditCard,
  Check,
  MapPin,
  Plane,
  Hotel,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const steps = [
  { id: 1, name: "Destination", icon: MapPin },
  { id: 2, name: "Details", icon: Calendar },
  { id: 3, name: "Add-ons", icon: Hotel },
  { id: 4, name: "Payment", icon: CreditCard },
  { id: 5, name: "Confirmation", icon: Check },
];

const destinations = [
  {
    id: 1,
    name: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1614334342593-656fdf19525d?w=400",
    price: 299,
  },
  {
    id: 2,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1737891681043-435b34d9c8d7?w=400",
    price: 449,
  },
  {
    id: 3,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1656247203824-3d6f99461ba4?w=400",
    price: 349,
  },
];

export function BookingFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDestination, setSelectedDestination] = useState<any>(null);
  const [bookingDetails, setBookingDetails] = useState({
    checkIn: "",
    checkOut: "",
    guests: 2,
  });
  const [addons, setAddons] = useState({
    breakfast: false,
    airportTransfer: false,
    tourGuide: false,
  });

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateTotal = () => {
    if (!selectedDestination) return 0;
    let total = selectedDestination.price * bookingDetails.guests;
    if (addons.breakfast) total += 50;
    if (addons.airportTransfer) total += 75;
    if (addons.tourGuide) total += 150;
    return total;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <motion.div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                        currentStep >= step.id
                          ? "bg-teal-600 text-white"
                          : "bg-gray-200 text-gray-400"
                      }`}
                      animate={
                        currentStep === step.id
                          ? { scale: [1, 1.1, 1] }
                          : { scale: 1 }
                      }
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <span
                      className={`text-sm ${
                        currentStep >= step.id
                          ? "text-teal-600"
                          : "text-gray-400"
                      }`}
                    >
                      {step.name}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-1 flex-1 mx-2 rounded ${
                        currentStep > step.id ? "bg-teal-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step 1: Choose Destination */}
            {currentStep === 1 && (
              <Card className="p-8">
                <h2 className="mb-6">Choose Your Destination</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {destinations.map((dest) => (
                    <motion.div
                      key={dest.id}
                      onClick={() => setSelectedDestination(dest)}
                      className={`cursor-pointer rounded-xl overflow-hidden ${
                        selectedDestination?.id === dest.id
                          ? "ring-4 ring-teal-600"
                          : ""
                      }`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="relative h-48">
                        <ImageWithFallback
                          src={dest.image}
                          alt={dest.name}
                          className="w-full h-full object-cover"
                        />
                        {selectedDestination?.id === dest.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-4 right-4 w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center"
                          >
                            <Check className="w-5 h-5 text-white" />
                          </motion.div>
                        )}
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className="mb-2">{dest.name}</h3>
                        <p className="text-teal-600">From ${dest.price}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            )}

            {/* Step 2: Booking Details */}
            {currentStep === 2 && (
              <Card className="p-8">
                <h2 className="mb-6">Booking Details</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2">Check-in Date</label>
                      <Input
                        type="date"
                        value={bookingDetails.checkIn}
                        onChange={(e) =>
                          setBookingDetails({
                            ...bookingDetails,
                            checkIn: e.target.value,
                          })
                        }
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Check-out Date</label>
                      <Input
                        type="date"
                        value={bookingDetails.checkOut}
                        onChange={(e) =>
                          setBookingDetails({
                            ...bookingDetails,
                            checkOut: e.target.value,
                          })
                        }
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2">Number of Guests</label>
                    <div className="flex items-center gap-4">
                      <Button
                        onClick={() =>
                          setBookingDetails({
                            ...bookingDetails,
                            guests: Math.max(1, bookingDetails.guests - 1),
                          })
                        }
                        variant="outline"
                        className="rounded-full w-12 h-12"
                      >
                        -
                      </Button>
                      <span className="text-2xl w-12 text-center">
                        {bookingDetails.guests}
                      </span>
                      <Button
                        onClick={() =>
                          setBookingDetails({
                            ...bookingDetails,
                            guests: bookingDetails.guests + 1,
                          })
                        }
                        variant="outline"
                        className="rounded-full w-12 h-12"
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  {selectedDestination && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-teal-50 p-6 rounded-xl"
                    >
                      <div className="flex justify-between items-center">
                        <span>Selected: {selectedDestination.name}</span>
                        <span className="text-teal-600">
                          ${selectedDestination.price} per person
                        </span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </Card>
            )}

            {/* Step 3: Add-ons */}
            {currentStep === 3 && (
              <Card className="p-8">
                <h2 className="mb-6">Enhance Your Experience</h2>
                <div className="space-y-4">
                  {[
                    {
                      id: "breakfast",
                      name: "Daily Breakfast",
                      price: 50,
                      icon: "🍳",
                    },
                    {
                      id: "airportTransfer",
                      name: "Airport Transfer",
                      price: 75,
                      icon: "✈️",
                    },
                    {
                      id: "tourGuide",
                      name: "Private Tour Guide",
                      price: 150,
                      icon: "🗺️",
                    },
                  ].map((addon) => (
                    <motion.div
                      key={addon.id}
                      onClick={() =>
                        setAddons({
                          ...addons,
                          [addon.id]: !addons[addon.id as keyof typeof addons],
                        })
                      }
                      className={`p-6 rounded-xl cursor-pointer transition-all ${
                        addons[addon.id as keyof typeof addons]
                          ? "bg-teal-50 border-2 border-teal-600"
                          : "bg-gray-50 border-2 border-transparent"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-3xl">{addon.icon}</span>
                          <div>
                            <h3>{addon.name}</h3>
                            <p className="text-gray-600">+${addon.price}</p>
                          </div>
                        </div>
                        {addons[addon.id as keyof typeof addons] && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center"
                          >
                            <Check className="w-5 h-5 text-white" />
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            )}

            {/* Step 4: Payment */}
            {currentStep === 4 && (
              <Card className="p-8">
                <h2 className="mb-6">Payment Details</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block mb-2">Cardholder Name</label>
                    <Input placeholder="John Doe" className="rounded-lg" />
                  </div>
                  <div>
                    <label className="block mb-2">Card Number</label>
                    <Input
                      placeholder="1234 5678 9012 3456"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2">Expiry Date</label>
                      <Input placeholder="MM/YY" className="rounded-lg" />
                    </div>
                    <div>
                      <label className="block mb-2">CVV</label>
                      <Input placeholder="123" className="rounded-lg" />
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>
                        $
                        {selectedDestination
                          ? selectedDestination.price * bookingDetails.guests
                          : 0}
                      </span>
                    </div>
                    {addons.breakfast && (
                      <div className="flex justify-between text-gray-600">
                        <span>Daily Breakfast</span>
                        <span>+$50</span>
                      </div>
                    )}
                    {addons.airportTransfer && (
                      <div className="flex justify-between text-gray-600">
                        <span>Airport Transfer</span>
                        <span>+$75</span>
                      </div>
                    )}
                    {addons.tourGuide && (
                      <div className="flex justify-between text-gray-600">
                        <span>Tour Guide</span>
                        <span>+$150</span>
                      </div>
                    )}
                    <div className="border-t pt-2 flex justify-between">
                      <span>Total</span>
                      <span className="text-teal-600">${calculateTotal()}</span>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Step 5: Confirmation */}
            {currentStep === 5 && (
              <Card className="p-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="w-12 h-12 text-green-600" />
                  </motion.div>
                  <h2 className="mb-4">Booking Confirmed!</h2>
                  <p className="text-gray-600 mb-8">
                    Your adventure to {selectedDestination?.name} is all set.
                    We've sent confirmation details to your email.
                  </p>

                  <div className="bg-teal-50 p-6 rounded-xl mb-8 text-left">
                    <h3 className="mb-4">Booking Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Destination</span>
                        <span>{selectedDestination?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Guests</span>
                        <span>{bookingDetails.guests}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Paid</span>
                        <span className="text-teal-600">
                          ${calculateTotal()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white rounded-full">
                      Download Itinerary
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 rounded-full"
                      onClick={() => {
                        setCurrentStep(1);
                        setSelectedDestination(null);
                      }}
                    >
                      Book Another Trip
                    </Button>
                  </div>
                </motion.div>
              </Card>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {currentStep < 5 && (
          <div className="flex justify-between mt-8">
            <Button
              onClick={handleBack}
              disabled={currentStep === 1}
              variant="outline"
              className="rounded-full"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentStep === 1 && !selectedDestination}
              className="bg-teal-600 hover:bg-teal-700 text-white rounded-full"
            >
              {currentStep === 4 ? "Complete Booking" : "Continue"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
