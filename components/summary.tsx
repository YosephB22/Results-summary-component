//svg
import Reactiom from '../public/assets/images/icon-reaction.svg';
import Memory from '../public/assets/images/icon-memory.svg';
import Verbal from '../public/assets/images/icon-verbal.svg';
import Visual from '../public/assets/images/icon-visual.svg';
//
import Image from 'next/image';

const summary = [
  { text: 'Reaction', score: 80, Icon: Reactiom, background: 'bg-reaction-bg', color: 'text-light-red' },
  { text: 'Memory', score: 92, Icon: Memory, color: 'text-orangey-yellow', background: 'bg-memory-bg' },
  { text: 'Verbal', score: 61, Icon: Verbal, color: 'text-green-teal', background: 'bg-verbal-bg' },
  { text: 'Visual', score: 72, Icon: Visual, color: 'text-cobalt-blue', background: 'bg-visual-bg' },
];
const Summary = () => {
  return (
    <div className="p-[2.5rem] flex flex-col gap-5 w-full">
      <h1 className="text-bold">Summary</h1>
      <div className="flex flex-col gap-4">
        {summary.map(({ Icon, score, text, background, color }) => (
          <div key={text} className={`flex rounded-lg gap-[5rem] ${background} justify-between p-4`}>
            <div className={`flex items-center gap-2`}>
              <Image src={Icon} alt={text} />
              <h3 className={`${color}`}>{text}</h3>
            </div>

            <p>
              <span className="font-bold">{score}</span> / 100
            </p>
          </div>
        ))}
      </div>
      <button className="bg-dark-gray-blue rounded-3xl p-3 text-white hover:bg-light-royal-blue">Continue</button>
    </div>
  );
};

export default Summary;
