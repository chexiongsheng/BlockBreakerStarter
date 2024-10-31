// Fill out your copyright notice in the Description page of Project Settings.

using UnrealBuildTool;
using System.Collections.Generic;

public class BlockBreakerTarget : TargetRules
{
	public BlockBreakerTarget(TargetInfo Target) : base(Target)
	{
		Type = TargetType.Game;
#if UE_5_4_OR_LATER
		DefaultBuildSettings = BuildSettingsVersion.V5;
		IncludeOrderVersion = EngineIncludeOrderVersion.Unreal5_4;
#else
        DefaultBuildSettings = BuildSettingsVersion.V2;
#endif

		ExtraModuleNames.AddRange( new string[] { "BlockBreaker" } );
	}
}
