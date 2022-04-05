interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <section>
      <li>{props.repository?.name}</li>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>Acessar repósitório</a>
    </section>
  );
}
