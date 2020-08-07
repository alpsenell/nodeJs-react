import React from 'react';

const ContestPreview = (contest) => (
    <div className="contestPreview">
        <div className="contestCategory">
            { contest.categoryName }
        </div>
        <div className="contestName">
            { contest.contestName }
        </div>
    </div>
);

export default ContestPreview;
