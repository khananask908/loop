"use client"
import React, { useEffect } from 'react'
import SideNav from '../../_components/SideNav';
import DocumentEditorSection from '../../_components/DocumentEditorSection';
import { Room } from '@/app/Room';

function workspaceDocument({params}) {
    
    /*    useEffect(() => {
            console.log(parms);
        }, [params])
    */
    return (
        <Room params={ params}>s
        <div>
          {/*Side Nav */}
          <div>
            <SideNav params={params} />
          </div>

          <div></div>
          {/*Documents */}
          <div className="md:ml-72">
            <DocumentEditorSection params={params} />
          </div>
          <div></div>
        </div>
      </Room>
    );
}

export default workspaceDocument