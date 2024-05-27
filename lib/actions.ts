import {
  storage,
  projectsCollectionRef,
  linksCollectionRef,
  skillsCollectionRef,
} from "@/firebase-config"
import { LinksCollection, Project, Skill } from "@/types/types"
import { getDocs, query, where } from "firebase/firestore"
import { ref, listAll, getDownloadURL } from "firebase/storage"

export const getProjects = async () => {
  const imageListRef = ref(storage, "images/")
  const snapshots = await getDocs(
    query(
      projectsCollectionRef,
      where("isHidden", "==", false)
    )
  )
  
  const res = snapshots.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as Project[]
  const imagesDb = await listAll(imageListRef)
  let withImages: Project[] = []
  for (const doc of res) {
    const image = imagesDb.items.find((img) => img.name.split(".")[0] == doc.id)
    const url = await getDownloadURL(image!)
    withImages.push({ ...doc, img: url })
  }
  return withImages as Project[]
}

export const getLinks = async () => {
  const raw = await getDocs(linksCollectionRef)
  const links = raw.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as LinksCollection
  return links
}

export const getSkills = async () => {
  const data = await getDocs(skillsCollectionRef)
  let tempArray = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as Skill[]
  // tempArray = tempArray.sort(({order:a}, {order:b}) => b-a).reverse();
  return tempArray
}
