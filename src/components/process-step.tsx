type ProcessStepProps = {
  step: number;
  title: string;
  body: string;
};

export function ProcessStep({ step, title, body }: ProcessStepProps) {
  return (
    <div className="flex gap-4 sm:gap-5">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-deepInlet text-sm font-bold text-white">
        {step}
      </div>
      <div className="pt-0.5">
        <p className="font-semibold text-deepInlet">{title}</p>
        <p className="mt-1 text-sm leading-6 text-slateText">{body}</p>
      </div>
    </div>
  );
}
