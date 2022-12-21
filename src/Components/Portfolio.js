import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    function handleClick(link){
      window.open(link);
    }
    
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (project) {
        return (
          <div>
             <h2>{project.title}</h2>
             <a href={project.link} target="_blank"><i className="fa fa-github"></i>Github</a>
             <p>{project.info}</p>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div c
          lassName="twelve columns collapsed">

            <h1>Check Out Some of My Works</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
