import classNames from 'classnames';
import ProfileImg from "../../public/img/account/Profile.svg";
import LogoutImg from "../../public/img/account/Logout.svg";

import Image from "next/legacy/image";
import { useAuth } from '../auth/auth';

import './userInfoSection.module.scss'
import DropdownWrapper from '../dropdownComponent/DropdownWrapper';
import { auth } from '../../firebase/initFirebase';
import TranslatedLink from '../TranslatedLink';

const UserInfoSection = () => {
	const {user} = useAuth()

	const DropdownParent = ({handler}) => {

		return (
			<div
				className={classNames({
					'user-info-section__item': true,
				})}
				onClick={handler}
			>
				<div className={"user-info-section__name"}>{user.displayName}</div>
				<Image
					alt={'Avatar'}
					src={user.photoURL || ProfileImg}
					width={32}
					height={32}
					className='user-info-section__avatar'
				/>
			</div>
		)
	}

	return (
        <div
			className={classNames({
				'user-info-section': true,
			})}
		>
			<DropdownWrapper
				ParentComponent={DropdownParent}
				contentClassname={'dropdown-menu-content'}
			>
				<ul className={'dropdown-menu'}>
					<li>
						<div className={'dropdown-menu__item'}>
							<Image
								alt={'Avatar'}
								className={'dropdown-menu__item-img'}
								src={ProfileImg}
								width={24}
								height={24}
							/>
							<TranslatedLink href="/account" className={'dropdown-menu__item-link'}>
								My profile
							</TranslatedLink>
						</div>
					</li>
					<li>
						<div className={'dropdown-menu__item'}>
							<Image
								alt={'Logout'}
								src={LogoutImg}
								width={24}
								height={24}
							/>
							<div onClick={async () => {
								await auth.signOut()
							}}>Log Out
							</div>
						</div>
					</li>
				</ul>
			</DropdownWrapper>
		</div>
    );
};

export default UserInfoSection;
