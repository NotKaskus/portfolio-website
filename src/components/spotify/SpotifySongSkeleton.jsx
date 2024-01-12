import cls from 'classnames';

export function SongSkeletonDetails(props) {
  return (
    <div className={cls('flex flex-col justify-center overflow-hidden', props.className)}>
        <h2 className='text-primary font-medium whitespace-nowrap overflow-hidden text-ellipsis'>
            {props.title}
        </h2>
        <h3 className='text-muted-foreground text-sm whitespace-nowrap overflow-hidden text-ellipsis'>
            {props.artist}
        </h3>
    </div>
  )
}

export function SongSkeleton(props) {
  return (
    <article className="flex gap-3 justify-between items-center">
      <div className="items-center flex gap-3 w-full">
      <img src="https://i.scdn.co/image/ab67616d00004851e897f4915425f0a48484e3f9" slot="image" alt="Album art for 怪物" loading="lazy" className="rounded aspect-ratio-1 object-cover h-[64px] w-[64px]" width="64" height="64" decoding="async" />
      <SongSkeletonDetails title='Song title' artist='Artist Name' />
      </div>
    </article>
  )
}