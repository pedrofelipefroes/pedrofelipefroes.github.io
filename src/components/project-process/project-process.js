import * as React from "react";
import c from "classnames";
import PropTypes from "prop-types";
import { Parallax } from "react-scroll-parallax";

import {
	description,
	divider,
	projectProcess,
	number,
	name,
	stages,
} from "./project-process.module.css";

const ProjectProcess = ({ process }) => (
	<div className={c(projectProcess, "sp-block-end-lg")}>
		<div>
			<Parallax
				className={divider}
				scaleY={[0, 1]}
				shouldAlwaysCompleteAnimation
				style={{ height: `calc(100% - calc(100% / ${process.length}))` }}
			/>
		</div>
		<div className={stages}>
			{process.map((stage, index) => (
				<div>
					<div>
						<p className={c(number, "font-600 text-align-center text-ms-1neg")}>
							{index + 1}
						</p>
						<p className={c(name, "font-500 text-ms-0")}>
							<strong>{stage.name}</strong>
						</p>
					</div>
					<p className={c(description, "text-ms-0")}>{stage.description}</p>
				</div>
			))}
		</div>
	</div>
);

ProjectProcess.propTypes = {
	stages: PropTypes.array.isRequired,
};

export default ProjectProcess;
