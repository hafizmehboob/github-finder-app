import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function UserItem({user: {login, avatar_url}}) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
        <div className="flex-row items-center space-x-4 card-body">
                <div className='avatar'>
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={avatar_url} alt="Profile" />
                    </div>
                </div>
                <div>
                   <h2 className="card-title">{login}</h2>
                   <Link to={`/user/${login}`} className='text-base-content text-opacity-40'>
                    Visite Profile
                   </Link> 
                </div>
        </div>
     </div>
  )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}