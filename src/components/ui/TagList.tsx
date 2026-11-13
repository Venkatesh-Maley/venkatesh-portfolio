interface TagListProps { items: string[] }

export function TagList({ items }: TagListProps) {
  return <ul className="tags" aria-label="Technologies">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}
