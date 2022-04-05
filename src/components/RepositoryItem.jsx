export function RepositoryItem(props) {
  return (
    <section>
      <li>{props.repository?.name}</li>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>Acessar repósitório</a>
    </section>
  );
}
