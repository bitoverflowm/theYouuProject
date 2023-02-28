
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
//import SpotlightingImage from '/images/spotLighting.png';

const SpotLighting = () => {
  return (
        <div className="min-h-screen flex flex-col justify-center items-center p-28 bg-white">
            <Head>
                <title>Spotlighting | TheYouuProject</title>
            </Head>
            <h1 className="text-3xl font-bold mb-4">
                From Olympians to Students: How 'Spotlighting' Is Helping People Everywhere Improve Focus and Concentration
            </h1>
            <h2 className="text-xl font-semibold mb-8">
                How Narrowing Your Visual Field Can Unlock Your Full Potential
            </h2>
            <div className="max-w-lg mx-auto mb-8">
                <img src={`/images/spotLighting.png`} alt={'Spotlighting Image'}  />
                {/*className="w-full h-auto mt-4 rounded-lg" */}
            </div>
            <p className="text-lg leading-7 mb-8">
                We all know the feeling: you sit down to work on a project, only to find yourself distracted by social media, email notifications, and other interruptions. It can be frustrating, but there's a simple solution that doesn't involve disconnecting from the world altogether. 'Spotlighting,' the powerful new tool from TheYouuProject, harnesses the power of neuroscience to help you narrow your visual field, release dopamine and other key neurotransmitters, and achieve a state of hyper-focus in just 30 seconds.
            </p>
            <p className="text-lg leading-7 mb-8">
                It all started when Dr. Emily Balcetis visited the Armory in Brooklyn and observed elite athletes training. What sets them apart from others? Nothing really seemed remarkable about their physiques, or how they conducted themselves– they seemed like normal humans just like the rest of us! After years of work and research, Dr. Balcetis discovered that high performers utilize their visual fields to optimize focus.
            </p>
            <p className="text-lg leading-7 mb-8">
                Enter "Spotlighting": by narrowing their visual field to a circular spotlight of focus, elite athletes and research subjects were able to run 25% faster, increase their pain tolerance, burn more calories, and achieve better physical outcomes.
            </p>
            <p className="text-lg leading-7 mb-8">
                But you don't have to be an elite athlete to benefit from Spotlighting. In China, it's used to help students improve focus and refocus after getting distracted. And now, you can use it too.
            </p>
            <p className="text-lg leading-7 mb-8">
                All it takes is a few minutes of focused breathing and visual attention to unlock your full potential. Here's how to do it:
            </p>
            <ol className="text-lg leading-7 mb-8 list-decimal list-inside">
                <li>Choose an item or spot on the wall in front of you.</li>
                <li>Focus on that location for 30 seconds to 3 minutes.</li>
                <li>Breathe normally and relax.</li>
                <li>If you find yourself losing focus, simply refocus your attention.</li>
            </ol>
            <p className="text-lg leading-7 mb-8">
                Using overt visual focus through Spotlighting releases dopamine, epinephrine, and other neurotransmitters that prime your body, brain, and nervous system to focus and work through physical or mental tasks. It's a simple yet powerful tool that can help you achieve maximum focus in as little as 30 seconds.
            </p>
            <p className="text-lg leading-7 mb-8">
                Ready to give Spotlighting a try? Head over to{' '}
                <Link href="https://theyouuproject.com/spotlighting">
                    <div className="text-blue-500 hover:underline">theyouuproject.com/spotlighting</div>
                </Link>{' '}
                to use the tool for free, no signup or download necessary.
            </p>
            <p className="text-lg leading-7 mb-8">
                Stay tuned for more cutting-edge tools and resources from TheYouuProject, including:
            </p>
            <ul className="text-lg leading-7 mb-8 list-disc list-inside">
                <li>Improved cold water therapy</li>
                <li>
                Have no cold plunge? No worries find neighbors offering their cold plunge for your benefit
                </li>
                <li>Track your progress and goals as you get healthier</li>
                <li>Instantly, automatically build a science-based workout based on goals you hope to achieve</li>
                <li>"Covert Visual Focus" to achieve greater focus and train focus</li>
                <li>Dopamine tracker: manage dopamine levels by knowing where you are at with your dopamine today</li>
            </ul>
            <p className="text-lg leading-7 mb-8">
            Let TheYouuProject help you (almost) effortlessly unlock your full potential.
            </p>
            <div className="text-sm text-gray-500">
                <p>
                    Credits:
                </p>
                <p>
                    Sir Isaac Newton said, "If I have seen further, it is by standing on the shoulders of giants."
                </p>
                <p>
                    This work is directly inspired by work presented in the Huberman Lab podcast in particles Episodes #83 (Dr. Emily Balcetis: Tools for Setting And Achieving Goals and Episode #88 (Focus Toolkit: Tools to Improve Your Focus & Concentration). Neither Dr Emily Balcetis nor Dr Andrew Huberman were involved in developing the Tool #1 Spotlighting by theYouuProject. However we have not veered in anyway from the protocols that they have proposed. We are eternally to them for their tremendous work in inspiring this project.
                </p>
                <p>
                    They have made a notable impact in my mental, physical health and psychology. I would not have been able to conceive of or build this project without their work.
                </p>
                <p>
                    Resources and Sources:
                </p>
                <ul className="list-disc list-inside ml-6">
                    <li>Source: https://hubermanlab.com/tools-to-manage-dopamine-and-improve-motivation-and-drive/</li>
                    <li>Spotlighting. Dopamine interacts with the visual system. Dr. Emily Balcetis, a professor of psychology at New York University (NYU), discussed on the Huberman Lab Podcast how physically focusing your visual attention on a specific point (or “spotlight”) will help maintain focus during bouts of goal work. When you focus on a particular point, a medley of neurochemicals (dopamine, epinephrine and others) are recruited and put you into a state of readiness and clear focus.</li>
                </ul>
            </div>
        </div>
    );
}


export default SpotLighting