"use client"

import CoverPicker from '@/app/_component/CoverPicker';
import EmojiPickerComponent from '@/app/_component/EmojiPickerComponent';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { db } from '@/config/firebaseConfig';
import { useAuth, useUser } from '@clerk/nextjs';
import { doc, setDoc } from 'firebase/firestore';
import { Loader2Icon, SmilePlus } from 'lucide-react';
import Image from 'next/image';
//import { useRouter } from 'next/router';
import { useRouter } from "next/navigation";
import React, { useState } from 'react'
import uuid4 from "uuid4";

function CreateWorkSpace() {

  const [coverImage, setCoverImage] = useState('/cover.png');
  const [workspaceName, setWorkspaceName] = useState();
  const [emoji, setEmoji] = useState();
  const { user } = useUser();
  const { orgId } = useAuth();
  const [loading, setLoading] = useState(false);
    const router = useRouter();
  

  // used to create new workspace and save data

       
  const OnCreateWorkspace = async () => {
    try {
      setLoading(true);
      const workspaceId = Date.now();

      // Ensure no undefined values are passed to Firestore
      const workspaceData = {
        workspaceName: workspaceName,
        emoji: emoji !== undefined ? emoji : null, // Default to null if undefined
        coverImage: coverImage !== undefined ? coverImage : null, // Default to null if undefined
        createdBy: user?.primaryEmailAddress?.emailAddress || "unknown",
        id: workspaceId,
        orgId: orgId || user?.primaryEmailAddress?.emailAddress || "unknown",
      };

      const result = await setDoc(
        doc(db, "Workspace", workspaceId.toString()),
        workspaceData
      );

      const docId = uuid4();
      const workspaceDocumentData = {
        workspaceId: workspaceId,
        createdBy: user?.primaryEmailAddress?.emailAddress || "unknown",
        coverImage: null,
        emoji: null, // Set emoji to null explicitly
        id: docId,
        documentName: "Untitled Document",
        documentOutput: [],
      };

      await setDoc(
        doc(db, "workspaceDocuments", docId.toString()),
        workspaceDocumentData
      );

      const documentOutputData = {
        docId: docId,
        output: [],
      };

      await setDoc(
        doc(db, "documentOutput", docId.toString()),
        documentOutputData
      );

      setLoading(false);
      router.replace("/workspace/" + workspaceId + "/" + docId);
    } catch (error) {
      console.error("Error creating workspace:", error);
      setLoading(false); // Ensure loading is stopped in case of an error
    }
  };


  return (
    <div className="p-10 md:px-36 lg:px-64 xl:px-96 py-28">
      <div className="shadow-2xl rounded-xl">
        {/*coverImage*/}
        <CoverPicker setNewCover={(v) => setCoverImage(v)}>
          <div className="relative group cursor-pointer">
            <h2
              className="hidden absolute p-4 w-full h-full
                    items-center group-hover:flex
                    justify-center  "
            >
              Change Cover
            </h2>
            <div className="group-hover:opacity-40">
              <Image
                src={coverImage}
                width={400}
                height={400}
                className="w-full h-[180px] object-cover rounded-t-xl"
              />
            </div>
          </div>
        </CoverPicker>
      </div>
      {/*input section */}
      <div className="p-12">
        <h2 className="font-medium text-xl">create a new Workspace </h2>
        <h2 className="text-sm mt-2">
          This is a shares space where you can collaborate with your team you
          can always rename it later{" "}
        </h2>
        <div className="mt-8 flex gap-2 items-center">
          <EmojiPickerComponent setEmojiIcon={(v) => setEmoji(v)}>
            <Button variant="outline">{emoji ? emoji : <SmilePlus />}</Button>
          </EmojiPickerComponent>
          <Input
            placeholder="Workspace Name"
            onChange={(e) => setWorkspaceName(e.target.value)}
          />
        </div>
        <div className="mt-7 flex justify-end gap-6">
          <Button
            disabled={!workspaceName?.length || loading}
            onClick={OnCreateWorkspace}
          >
            Create {loading && <Loader2Icon className="animate-spin ml-2" />}{" "}
          </Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </div>
    </div>
  );
}

export default CreateWorkSpace