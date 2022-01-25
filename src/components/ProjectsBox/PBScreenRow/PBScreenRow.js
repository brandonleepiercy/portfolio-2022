import React from 'react';
import { HiOutlineFolder } from 'react-icons/hi';

function PBScreenRow(props) {

    let { title } = props;
    let { size } = props;
    let { id } = props;
    let { setSelected } = props;
    let { setHome } = props;
    let { returning } = props;

    return (
        <div className={returning ? 'screen-home-project-row-no-fade' : 'screen-home-project-row'} value={id} key={id} id={id} onClick={(event) => {
            setSelected(event.target.id);
            setHome(false);
        }}>
            <div className='screen-project-icon-wrapper'>
            <HiOutlineFolder color={'#879777'} size={'2vw'} id={id}/>
            </div>

            <div className='screen-project-title-wrapper' id={id}>
            {title}
            </div>

            <div className='screen-project-size-wrapper' id={id}>
            {size}
            </div>
        </div>
    );
};

export default PBScreenRow;
