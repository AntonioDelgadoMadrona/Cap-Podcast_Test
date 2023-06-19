// DEPENDENCIES
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
// HANDLERS
import { getEpisodeInfoHandler } from "../../../api/handlers/episode-info.handler";
// UTILS
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { checkUpdateDate } from "../../../utils/data-utils";
// TYPES
import { EpisodeDetailsType, PodcastDetailsType } from "../../../types";

interface EpisodeInfoType {
  episodeDetails?: EpisodeDetailsType;
  podcastDetails?: PodcastDetailsType;
}

interface EpisodeInfoStorageType {
  data: EpisodeInfoType;
  updatedAt: Date;
}

/* eslint-disable react-hooks/exhaustive-deps */
export function useEpisodeInfo() {
  const { id = "", episodeId = "" } = useParams();
  const [episodeInfoStorage, setEpisodeInfoStorage] = useLocalStorage<EpisodeInfoStorageType>("episodeInfo", {
    data: {},
    updatedAt: new Date(),
  });
  const [episodeInfo, setEpisodeInfo] = useState<EpisodeInfoType>({});

  useEffect(() => {
    if (episodeInfoStorage?.updatedAt && episodeInfoStorage?.data?.podcastDetails) {
      const isOnTime = checkUpdateDate(episodeInfoStorage.updatedAt);
      const isSameId =
        Number(episodeInfoStorage.data.podcastDetails?.id) === Number(id) &&
        Number(episodeInfoStorage.data.episodeDetails?.id) === Number(episodeId);
      isOnTime && isSameId ? setEpisodeInfo({ ...episodeInfoStorage.data }) : getEpisodeInfo();
    } else getEpisodeInfo();
  }, []);

  const getEpisodeInfo = useCallback(() => {
    getEpisodeInfoHandler(id, episodeId).then((response) => {
      setEpisodeInfoStorage({ data: response, updatedAt: new Date() });
      setEpisodeInfo({ ...response });
    });
  }, []);

  return {
    episodeInfo,
  };
}
