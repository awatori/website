import { CircleList } from "@/lib/expertiseData";

import { useTranslations } from "next-intl";

type Props = {
  lists: CircleList[];
  translation: string;
}

export function CircleListContainer({ lists, translation }: Props) {
  const t = useTranslations(translation);
  return (
    <section className="flex flex-wrap gap-x-[2%] gap-y-8 justify-center mt-8">
      {lists.map(list => (
        <div className="flex flex-col w-[32%] items-center" key={list.title}>
          <div className="flex w-[90%] md:w-[60%] aspect-square rounded-full bg-black text-slate-50 self-center justify-center items-center text-[8px]/6 md:text-[10px]/6 lg:text-base/9 mb-4">
            <h2 className="text-center w-5/6 md:w-3/4 lg:w-[70%] whitespace-pre-line"><strong>{t(list.title)}</strong></h2>
          </div>
          {list.list.map(item => (
            <p className="text-[8px] md:text-[12px] lg:text-lg text-center mt-6 w-5/6 md:w-3/4 lg:w-[80%]" key={item}>{t(item)}</p>
          ))}
        </div>
      ))}
    </section>
  )
}