
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Link from "next/link";
const landingPage = () => {
  return (
    <>
    <header className="bg-gray-100 dark:bg-gray-800 py-6 shadow">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link className="flex items-center space-x-2" href="#">
              <CameraIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">AI Image Detection</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-4">
              <Link className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
                Features
              </Link>
              <Link className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
                Pricing
              </Link>
              <Link className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
                Contact
              </Link>
            </nav>
            <div className="flex ">
            <Link href="/sign-in">
            <Button className="m-2 ">sign in</Button>
            </Link>
            <Link href="/sign-up">
            <Button className="m-2">sign up</Button>
            </Link>
            </div>
            
          </div>
        </div>
      </header>
      <main>
        <section className="bg-gray-100 dark:bg-gray-800 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200">
                  Unlock the Power of AI Image Detection
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Our cutting-edge AI technology can analyze your images in real-time, providing valuable insights and
                  unlocking new possibilities for your business.
                </p>
                <Button size="lg" variant="link">
                  Start Now
                </Button>
              </div>
              <div>
                <img
                  alt="AI Image Detection"
                  className="rounded-lg shadow-lg"
                  height={400}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-900 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  alt="AI Image Detection Features"
                  className="rounded-lg shadow-lg"
                  height={400}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width={600}
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
                  Powerful Features for Your Business
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Our AI image detection service offers a wide range of features to help you unlock new insights and
                  drive your business forward.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Real-time image analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Object detection and classification</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Customizable AI models</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Seamless integration with your workflows</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 dark:bg-gray-800 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
                Get Started with AI Image Detection
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Our easy-to-use platform makes it simple to start leveraging the power of AI for your business.
              </p>
              <Button size="lg" variant="link">
                Start Now
              </Button>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-900 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
                  Discover the Benefits of AI Image Detection
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Our AI image detection service can help your business in a variety of ways, from improving customer
                  experience to streamlining your operations.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Enhance product recommendations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Automate inventory management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Improve visual search capabilities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Streamline content moderation</span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  alt="AI Image Detection Benefits"
                  className="rounded-lg shadow-lg"
                  height={400}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 dark:bg-gray-800 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">Testimonials</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Hear from our satisfied customers about their experience with our AI image detection service.
              </p>
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-6 bg-white dark:bg-gray-950 rounded-lg shadow-lg">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage alt="John Doe" src="/placeholder-avatar.jpg" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-gray-200">John Doe</h4>
                            <p className="text-gray-500 dark:text-gray-400">CEO, Acme Inc.</p>
                          </div>
                        </div>
                        <blockquote className="text-lg text-gray-600 dark:text-gray-400">
                          "The AI image detection service from this company has been a game-changer for our business. It
                          has helped us streamline our operations, improve customer experience, and unlock new insights
                          that have driven our growth."
                        </blockquote>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-6 bg-white dark:bg-gray-950 rounded-lg shadow-lg">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage alt="Jane Smith" src="/placeholder-avatar.jpg" />
                            <AvatarFallback>JS</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-gray-200">Jane Smith</h4>
                            <p className="text-gray-500 dark:text-gray-400">CTO, Acme Inc.</p>
                          </div>
                        </div>
                        <blockquote className="text-lg text-gray-600 dark:text-gray-400">
                          "I was hesitant to try an AI-powered image detection service at first, but the team at this
                          company made the integration process seamless. The results have been incredible, and we're now
                          able to leverage image data in ways we never thought possible."
                        </blockquote>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-6 bg-white dark:bg-gray-950 rounded-lg shadow-lg">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage alt="Bob Johnson" src="/placeholder-avatar.jpg" />
                            <AvatarFallback>BJ</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-gray-200">Bob Johnson</h4>
                            <p className="text-gray-500 dark:text-gray-400">Head of Product, Acme Inc.</p>
                          </div>
                        </div>
                        <blockquote className="text-lg text-gray-600 dark:text-gray-400">
                          "The AI image detection service from this company has been a game-changer for our product
                          development process. We're now able to quickly analyze and categorize images, which has helped
                          us make more informed decisions and deliver better products to our customers."
                        </blockquote>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-900 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  alt="AI Image Detection Pricing"
                  className="rounded-lg shadow-lg"
                  height={400}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width={600}
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
                  Affordable Pricing for Every Business
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Our AI image detection service offers flexible pricing plans to fit your budget and needs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Starter</CardTitle>
                      <CardDescription>Perfect for small businesses</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-4xl font-bold">$19</p>
                        <p className="text-gray-500 dark:text-gray-400">per month</p>
                      </div>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-center space-x-2">
                          <CheckIcon className="h-5 w-5 text-green-500" />
                          <span>100 image analyses per month</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckIcon className="h-5 w-5 text-green-500" />
                          <span>Basic AI model</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckIcon className="h-5 w-5 text-green-500" />
                          <span>Email support</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link">Get Started</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Pro</CardTitle>
                      <CardDescription>Ideal for growing businesses</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-4xl font-bold">$49</p>
                        <p className="text-gray-500 dark:text-gray-400">per month</p>
                      </div>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-center space-x-2">
                          <CheckIcon className="h-5 w-5 text-green-500" />
                          <span>500 image analyses per month</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckIcon className="h-5 w-5 text-green-500" />
                          <span>Customizable AI models</span>
                        </li>
                        <li className="flex items-center space-x-2" />
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <CameraIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">AI Image Detection</span>
          </div>
          <nav className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link className="hover:text-gray-200" href="#">
              Features
            </Link>
            <Link className="hover:text-gray-200" href="#">
              Pricing
            </Link>
            <Link className="hover:text-gray-200" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
};

function CameraIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}


function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export default landingPage;