import './styles.css';

export default function CardItem(
	{
		profile_picture, 
		description,
		name, 
		link_instagram, 
		nick_instagram, 
		seguidores, 
		seguindo
	}) {
  return (
      <div className="card">
			  <div className="picture">
			  	<img src={profile_picture} alt={description}/>
			  </div>

			  <div className="profile">
			  	<h3>{name}</h3>
			  	<a href={link_instagram} target="_blank">{nick_instagram}</a>
			  </div>

			  <div className="data">
			  	<h4>{seguidores}</h4>
			  	<h4>{seguindo}</h4>
			  </div>
		  </div>
  );
}

