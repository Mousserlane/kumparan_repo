import React, {Component} from 'react';
import {expandSubmenu} from '../Actions/interactionAction';

import Logo from '../icons/kumparan_logo.png';
import newtaskicon from '../icons/icon_new_task.png' //kekecilan di ganti ya
import taskstatusicon from '../icons/icon_task_status.png';
import myposticon from '../icons/icon_my_post.png';
import poststatusicon from '../icons/icon_post_status.png';
import poststatsicon from '../icons/icon_post_statistic.png';
import contentmonicon from '../icons/icon_content_monitoring.png';
import helpicon from '../icons/icon_help.png';
import personalicon from '../icons/icon_personal.png';
import teamicon from '../icons/icon_team.png';
import caret from '../icons/caret_color.png';

class SideMenu extends Component{
  showmenu(e){
    switch(e.currentTarget.id){
      case "post_status":
        var statusmenu = document.getElementById("submenu_status");
        if(statusmenu.style.display === 'block'){
          statusmenu.style.display = 'none'
        }
        else{
          statusmenu.style.display = 'block'
        }
        break;
      case "post_statistic":
        var statisticmenu = document.getElementById("submenu_statistic");
        if(statisticmenu.style.display === 'block'){
          statisticmenu.style.display = 'none'
        }
        else{
          statisticmenu.style.display = 'block'
        }
        break;
    }
  }
  render(){
    return(
      <div className="row kmprn-side-menu">
        <div className="row">
          <div className="col-md-6 col-lg-6" style={{textAlign: 'center' }}>
            <img src={Logo} />
          </div>
          <div className="col-md-4 col-lg-3">
            <h5 className="side-menu-title menu-border-bottom">Content Intelligent</h5>
          </div>
        </div>
        <div className="">
          <ul className="col-md-12 side-menu-setting">
            <li className="side-menu-item"><span><img src={newtaskicon} /></span><button>New Task</button></li>
            <li className="side-menu-item"><span><img src={taskstatusicon} /></span><button>Task Status</button></li>
            <li className="side-menu-item"><span><img src={myposticon} /></span><button>My Post</button></li>
            <li className="side-menu-item"><span><img src={poststatusicon} /></span><button id="post_status"
              onClick={this.showmenu}>Post Status
              <span id="img_status"><img src={caret} /></span></button>
              <div id="submenu_status" className="container-fluid submenustatus">
                <ul className="sub-menu-item row">
                  <li className="side-menu-item"><span><img src={personalicon} /></span><button>Personal</button></li>
                  <li className="side-menu-item"><span><img src={teamicon} /></span><button>Team</button></li>
                </ul>
              </div>
            </li>
            <li className="side-menu-item"><span><img src={poststatsicon} /></span><button id="post_statistic"
              onClick={this.showmenu}>Post Statistic
              <span id="img_statistic"><img src={caret} /></span></button>
              <div id="submenu_statistic" className="container-fluid submenustatistic">
                <ul className="sub-menu-item row">
                  <li className="side-menu-item"><span><img src={personalicon} /></span><button>Personal</button></li>
                  <li className="side-menu-item"><span><img src={teamicon} /></span><button>Team</button></li>
                </ul>
              </div>
            </li>
            <li className="side-menu-item"><span><img src={contentmonicon} /></span><button>Content Monitoring</button></li>
            <li id="bottom-content" className="side-menu-item"><span><img src={helpicon} /></span>Help</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default SideMenu
